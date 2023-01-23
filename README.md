<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  

<h3 align="center">Braille Translator</h3>

  <p align="center">
  This project is a full-stack web application that leverages the latest web development technologies to provide a powerful Braille translation solution. Utilizing Angular framework for the front-end, and MongoDB, Express, and Node for the back-end, the application offers a user-friendly keypad-like input system that enables the efficient translation of Braille, with the added convenience of a built-in Braille translation chart. Moreover, the application allows users to create an account and sign in to save their translations, and features state management through NGRX and route guarding through authentication to ensure a secure user experience.
    <br />
    <br />
    <br />
    <a href="https://braille-app.herokuapp.com/">View Live</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<img src="https://i.ibb.co/MNxsdLw/braille-App.jpg" alt="braille-App" border="0" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* [![MongoDB][MongoDB]][Mongo-url]
* [![Express][Express]][Express-url]
* [![Angular][Angular.io]][Angular-url]
* [![Node][Node]][Node-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Ensure that you have an established Mongo database to access and connect to. This can be done either through Mongo's Compass application at mongodb://localhost:27017
<br>

Or through Mongo's Atlas Services at with the following URL template
<br>
mongodb+srv://<USER>:<PASSWORD>@cluster0.m5dfb.mongodb.net/<DATABASE>?retryWrites=true&w=majority

<br>

1. Set Node version to 14.17.3 using NVM
   ```sh
   nvm use 14.17.3
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sirpuffin1/braille-translator.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```js
   npm run dev-server
   ```
   
4. Navigate to the src/client/src and start the client
   ```js
   ng serve
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/angel-cruz-50304623b/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com/
[Express]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Node]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en/
