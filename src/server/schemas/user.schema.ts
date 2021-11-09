import mongoose from 'mongoose';
import type { User } from '../../shared/models/user.model';
import type { Translation } from '../../shared/models/translation.model'
const {Schema, model} = mongoose

const translationSchema = new Schema({
    message: String
})

const userSchema = new Schema<User>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    translations: [translationSchema]

});

export const UserModel = model<User>('User',userSchema)
