import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import path from 'path';
import { PostModel } from "./schemas/post.schema.js";
import { UserModel } from "./schemas/user.schema.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import * as socketIO from "socket.io";
import http from 'http';
import dotenv from "dotenv";
import { authHandler } from "./middleware/auth.middleware.js";
dotenv.config();

const __dirname = path.resolve();

const router = express.Router();

const access_secret = process.env.ACCESS_TOKEN_SECRET as string;
console.log(access_secret);
const app = express();
const server = http.createServer(app);
const io = new socketIO.Server(server,  { cors: {
  origin: '*'
}});



const saltRounds = 10;


const PORT = process.env.PORT || 3000;

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("Connected to DB Successfully");
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

app.use(express.json());

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3501', 'http://localhost:8080']
}));



const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));

app.use('/api', router)

router.get("/", function (req, res) {
  res.json({ message: "test" });
});

router.get("/posts", function (req, res) {
  PostModel.find()
    .then((data) => res.json({ data }))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});
router.get("/users", authHandler, function (req: any, res) {
  UserModel.find({}, '-password')
    .then((data) => res.json({ data }))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});
router.post("/create-user", function (req, res) {
  const { name, email, password } = req.body;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      const user = new UserModel({
        name,
        email,
        password: hash,
      });
      user
        .save()
        .then((data) => {
          res.json({ data });
        })
        .catch((err) => {
          res.status(501);
          res.json({ errors: err });
        });
    });
  });
});

router.post("/create-post", function (req, res) {
  const { title, body } = req.body;
  const post = new PostModel({
    title,
    body,
  });
  post
    .save()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});

router.post('/add-translation', function(req, res) {
  const {message} = req.body;
  UserModel.findByIdAndUpdate(req.body._id, {$push: {translations: {message}}}, {new: true}).then((data) => {
    console.log(data);
    res.json({data})
  })
})

router.delete("/delete-user/:id", function (req, res) {
  const _id = req.params.id;
  UserModel.findByIdAndDelete(_id).then((data) => {
    console.log(data);
    res.json({ data });
  });
});



router.post("/login", function (req, res) {
  const { email, password } = req.body;
console.log(email)
console.log(password)
  UserModel.findOne({ email }).lean()
    .then((user) => {
        console.log(user);
      
      bcrypt.compare(password, `${user?.password}`, function (err, result) {
        if (result) {
          console.log("It matches!");
          const accessToken = jwt.sign({user}, access_secret)
          res.cookie('jwt', accessToken, {
              httpOnly: true,
              maxAge: 60 * 1000 * 60,
          })
          res.json({data:  user})
        } else {
          res.sendStatus(403);
        }
      });
    })
    .catch((err) => {
      return res.sendStatus(404);
    });
});

router.get('/logout', function(req, res){
    res.cookie('jwt', '', {
        httpOnly: true,
        maxAge: 0,
    })
    res.json({message: 'Successfully Logged Out'})
});

router.get('/check-login', authHandler, (req: any, res) => {
  res.json({message: 'yes'});
  console.log(req.user)
})

router.delete("/delete-translation/:id", authHandler, (req:any, res) => {
  console.log("Delete Translation", req.body, req.user._id);

  UserModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(req.user._id) ,{
       $pull: { translations: {_id: new mongoose.Types.ObjectId(req.params.id)}}  
    },
    {
      new: true,
    },
    function (err, updateUser) {
      if (err) {
        console.log(err);
        res.sendStatus(401)
      } else {
        res.json(updateUser);
      }
    }
  );
});

app.all("*", function (req, res) {
  const filePath = path.join(__dirname, '/dist/client/index.html');
  console.log(filePath);
  res.sendFile(filePath);
});
server.listen(PORT, function () {
  console.log(`starting at localhost http://localhost:${PORT}`);
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('message', 'work')
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

