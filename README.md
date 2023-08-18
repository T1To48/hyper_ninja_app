<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="client/public/logo/Logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Hyper Ninja</h3>

  <p align="center">
    Anti Server-Sleeper,  Keeps your Servers Up and Running 
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>View Demo</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#technologies-used">Technologies Used</a>
      <ul>
        <li><a href="#frontend">Frontend</a></li>
        <li><a href="#backend">Backend</a></li>
      </ul>
    </li>
     <li>
      <a href="#project-structure">Project Structure</a>
      <ul>
        <li><a href="#client-side">Client Side</a></li>
        <li><a href="#server-side">Server Side</a></li>
      </ul>
    </li>
    <li><a href="#used-tech-review">Used Tech Review</a></li>
    <li><a href="#personal-experience">Personal Experience</a></li>
   
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="readme_assets/register_page.png"  alt="Logo" >

<br>
<br>
 <font  size=4  >

Hyper Ninja is professionally engineered Full-stack MERN app , that ensures your servers deployed on Render or any other deployment service stay awake and running effortlessly.

Third party deployment servers put each deployed server to sleep (idle state),after 14 minutes of non-usage. This can lead to 30-40 seconds loading time, when the server is in idle state.

<b >In comparison each server that is subscribed in hyper ninja will be up and running with less than 0.5 second loading time.</b>

<span style="color:#695cfe; font-weight:500">\* Registered Servers Stay Active, As long as the user is logged in to his account and Hyper Ninja app is opened in a browser tab.</span>

</font>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

<font  size=5  style="color:#D4AF37">Empowering users with an array of advanced functionalities. Explore dynamic dashboards, personalized profile management, and more. Discover how these features redefine user interaction:
</font>

- <font  size=4>
       Responsive Expandable Sidebar Offering a seamless Navigation and intuitive user experience.
    </font>
  <br>

- <font  size=4>
     Light and Dark modes,to optimize visual comfort in diverse environments.</font>
  <br>

- <font  size=4>
       A dynamic dashboard efficiently presents subscribed servers, featuring essential details and user-friendly on/off toggles.
    </font>
  <br>

- <font  size=4>
      Complete Server Configuration Page: Users can exercise full control over server settings through a profile page, featuring CRUD operations and an integrated logger screen.
    </font>
  <br>

- <font  size=4>
      User-Centric Profile Management: The user profile page facilitates personalized control with CRUD options, including secure password modification and Account Delete.
    </font>
  <br>

- <font  size=4>
    The app has many Ui Ux features to make it more user-friendly and also comfy to use.
  </font> 
   <br>

- <font  size=4>
      Employing secure cookies, caching, and automatic data refetching, the app ensures data security and optimized performance.
    </font>
  <br>

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Usage is very Simple but First small setup for each server is required.

This Usage Guide is for NodeJs Express server,
But every server (no matter which programmming language) works on Hyper Ninja,
<b> as long as it has a Get Request with the below JSON OBJECT as Response with Endpoint matches
the registered endpoint in hyper ninja account.</b>

### 1.Server Setup (NodeJs Express example)

Each registered server, must have simple <b>endpoint setup</b>.
With it's help Hyper Ninja can keep the server Active,
this endpoint is going to handle a <b>GET</b> Request and return this object as JSON Response:

```json
{
  "success": true,
  "data": "revived"
}
```

### 2.Installation

There is two server setup Methods Simple & Advanced.

#### Simple Installation

I.open the Entry point file (server.js / index.js) of the server-side code ,

II.COPY and PASTE this in your entry point file:

```js
app.get("/reviver", (req, res) =>
  res.status(200).json({ success: true, data: "revived" })
);
```

#### Advanced Installation

I.open the Entry point file (server.js / index.js) of the server-side code ,

II.COPY and PASTE this in your entry point file:

```js
app.get("/reviver", (req, res) =>
  setTimeout(
    () => res.status(200).json({ success: true, data: "revived" }),
    5000
  )
);

app.get("*", (_, res) =>
  res.status(404).json({ success: false, data: "Endpoint doesn't exist" })
);
```

- The <b>SetTimeout</b> provides a better user experience and also gurantees that the server is Activated and functioned for a fixed amount of time , which increase the Hyper Ninja server's Revivng-Mechanism efficiency.
- The <b>`"*"` GLOBAL ENDPOINT</b> gives Error handling advantage , where the Hyper Ninja server’s Logger
will warn you if the Error is caused by incorrect endpoint.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Technologies Used

### Frontend

1.React Vite (Typescript)
2.Redux Tool kit as state manager 3. Redux Tool kit Query as data fetching and chahing tool 4. 100% Pure CSS
5.React-router-dom with createBrowserRouter()

### Backend

<!-- CONTRIBUTING -->

## Project Structure

### Client Side

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Server Side

<!-- LICENSE -->

## Used Tech Review

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Personal Experience

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
