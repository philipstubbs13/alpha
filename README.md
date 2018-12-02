# Alpha

"When there are no more leaders to follow, you must become one." This quote is from the movie Alpha. The movie is about a boy named Keda who goes on his first hunt with his tribe but gets separated after coming face to face with a buffalo. To find his way back home, he forms a close friendship with a lone wolf that also got separated from her pack. To overcome the odds of making it back home and surviving before the harsh, cold winter, Keda must take charge and be strong to not only save his life but also save the life of his new friend. 

This movie and quote really define what I haved faced and battled to get to this point in my life so far. My life has been nothing but easy. I have had to stand up for myself when others around me haven't, be bold when making the right choices, and have courage to continue to move on despite the constant obstacles and challenges in my way. As a result, I created this website so that you can see what I have been through, what I face now, and what I want to pursue next.

For more information about the movie, you can watch the trailer here: <https://www.youtube.com/watch?v=uNFufvM7qNU>.

## Table of contents

* [Live](#live)
* [Screenshots](#screenshots)
* [About this project](#about-this-project)
  * [How the app is built](#how-the-app-is-built)
  * [App workflow](#workflow)
  * [Structure of the project](#project-structure)
* [Getting started](#getting-started)
* [Deploying the app](#deployment)
* [Technologies used to create app](#technologies-used)
  * [Back end technologies](#Backend)
  * [Front end technologies](#Frontend)
  * [Other technologies](#Other)
* [Direction for future development](#future)
* [Issues](#Issues)

## <a name="live"></a>Live

The website is current live at the following URL:
<http://www.philjstubbs.com>

## <a name="screenshots"></a> Screenshots

### Landing/Home Page

<img src="./readme_images/landing.png">

### About me page

<img src="./readme_images/aboutme.png">

### My work page

<img src="./readme_images/mywork.png">

### Resume page

<img src="./readme_images/resume.png">

### Contact me page

<img src="./readme_images/contactme.png">

## <a name="about-this-project"></a> About this project

This is my portfolio website built using React. It includes information about me, my resume, projects I have worked on, and information on how to get in touch with me.

My original portfolio website was built using vanilla JavaScript and Handlebars. You can find the source code for that site available here: <https://github.com/philipstubbs13/coding-portfolio>. The more I developed that site, the more I became less and less satisfied with it. Over time, it became more and more difficult to maintain. So, that's why I created a new portfolio site with React so that I can update and maintain it quickly as I spin up new projects.

Just a little bit about me... I graduated from the University of Minnesota Full Stack Web Development program in May 2018. This site not only showcases the projects I completed during that program but also projects I am currently working on so that you can get to know a little bit more about me and my life as a web developer. As I continue my web development journey, I will continue to add new projects to this site that you can explore and learn more about.

If you have any questions, comments, or find any issues with the site or one of the projects showcased on this site, feel free to email me at philipstubbs13@gmail.com.

### <a name="how-the-app-is-built"></a> How the app is built

On the front end side, this project is built using React, which is an open-source Javascript library developed at Facebook specifically for the task of developing user interfaces. React relies on a component-based architecture where elements of the user interface are broken into small chunks of code called components. To design and build the user interface, I used css grid to align, justify, and place components on the page.

This project is currently a client-side application. In the future, I plan to add a backend database where I can store and retrieve blog posts, user comments, projects I have worked on, as well as my resume. Finally, Firebase Hosting is used to deploy and host the site.

### <a name="workflow"></a> App workflow

#### Landing/Home page

When you first visit the website, you will see the Landing/Home page. From this page, you can navigate to the rest of the website by clicking <b>ABOUT ME</b>, <b>MY WORK</b>, or <b>CONTACT ME</b> across the bottom of this page. 

#### About me page

The about me page includes a little intro to who I am, including a photo of me and a short biography.

### My work page

The my work page includes all of the projects I have worked on and contributed to as well as the projects I am currently building. Each project includes a link to the source code on GitHub, and if there's a user interface for a project, there will also be a link that will take you to the applicable website. Also, when you hover over a project, the project name will appear.

### My resume page

The my resume displays the HTML version of my resume. If you want to print the resume, you can simply click the printer icon in the top left corner of the page to get a PDF version for printing.

### Contact me page

The Contact me page is probably the simplest page of the website but probably the most important when you visit this site (which is why I kept the design of this page short, simple, and easy to navigate). If you hover over the <b>Email</b> or <b>Phone</b> buttons, my email or phone number (respectively) will be displayed. This page also contains links to my LinkedIn, Twitter, Facebook, Stackoverflow, and GitHub accounts

### <a name="project-structure"></a> Structure of the project

After you clone the repository, you can navigate to the project root directory (alpha). The project directory structure will be set up as follows:


* <b>public</b>: The public folder contains the index.html file. This HTML file is a template. The file is empty. So, if you open it directly in a browser, you will get an empty page. Rather than placing the HTML code directly in index.html, this app uses a React component-based architecture to create, build, and render UI components to the page.
* <b>src</b>: The src folder is where the React app components reside.
  * <b>images</b>: Contains the images used in the app.
  * <b>App.js</b>: The App.js file is where the app components are imported and rendered, such as the header, footer, and various pages.
  * <b>index.js</b>: The index.js file is the top level file of the React app. In index.js, the App.js file is imported, and the ReactDOM.render method is used to render App.js to the page.
  * <b>components</b>: The Components folder is where the app components that are reused across the app are located. Each file represents a separate component. For example, Footer.js is the footer component.
  * <b>components/layout</b>: Holds all the pages of the app and the child components within those pages. For example, inside of the layout folder, there is a Resume folder. The Resume folder contains a top-level parent container/page called Resume.js.
  * <b>App.css</b> and <b>index.css</b>: The external css stylesheets for the app.
* <b>firebase-config.js</b>: contains the Firebase initialization code to connect the app to Firebase.
* <b>.eslintrc.json</b>: List of rules and their definitions for ESLint.
* <b>.gitignore</b>: Anything listed inside this file (for example, node_modules) will not be tracked by GitHub when code is committed.
* <b>package.json</b>: Lists the project dependencies and their version numbers.
* <b>README.md</b>: The README file that contains important information about this project.
* <b>yarn.lock</b>: Dependency tree for the project. Lists all the client dependencies and their versions.
* <b>readme_images</b>: Images used in the project README file.
* <b>.firebaserc</b>: Hidden file that allows you to quickly switch between projects with 'firebase use'.
* <b>.gitignore</b>: Anything listed inside this file (for example, node_modules) will not be tracked by GitHub when code is committed.
* <b>database.rules.json</b>: Contains read/write rules for reading and writing data to the Firebase database.
* <b>firebase.json</b>: Firebase configuration file required to deploy the site to Firebase.
* <b>package.json</b>: Lists the project dependencies and their version numbers. It also contains various scripts to start the server, create a production build, etc.
* <b>yarn.lock</b>: Dependency tree for the project. Lists the project dependencies and their versions.

## <a name="getting-started"></a> Getting started

The following section will take you through the steps of setting up this app and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to <http://www.philjstubbs.com>.

To set up this application locally on your computer, perform the following steps:

  1. [Clone the repository](#clone-repository)
  2. [Install Node.js](#install-node)
  3. [Install yarn](#install-yarn)
  4. [Install the project dependencies](#dependencies)
  5. [Start the React development server](#start-server)

###  <a name="clone-repository"></a> 1. Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

```bash
git clone https://github.com/philipstubbs13/alpha.git
cd ./alpha
```

###  <a name="install-node"></a> 2. Install Node.js

<p>If you don't already have Node.js installed on your computer, you can install the latest version <a href="https://nodejs.org/en/">here</a>.</p>

### <a name="install-yarn"></a> 3. Install yarn

To be able to install the dependencies and start the application locally, you will need to install yarn. Yarn is a package manager like npm.

To install yarn globally, run the following command:
<pre>npm install -g yarn</pre>

For more information about yarn and other installation options, see the yarn documentation: <https://yarnpkg.com/en/>.

### <a name="dependencies"></a> 4. Install the project dependencies

<p>The following packages are dependencies to the project.<p>

<ul>
  <li><b>firebase</b> - tools and infrastructure used to host app (https://www.npmjs.com/package/firebase).</li>
  <li><b>prop-types</b> - Used to document the intended types of props passed to components (https://www.npmjs.com/package/prop-types)</li>
  <li><b>react</b> - package for accessing React (https://www.npmjs.com/package/react)</li>
  <li><b>react-dom</b> - serves as the entry point of the DOM-related rendering paths (https://www.npmjs.com/package/react-dom).</li>
  <li><b>react-router-dom</b> - a third party routing library (https://www.npmjs.com/package/react-router-dom)</li>
  <li><b>react-scripts</b>: package that includes scripts and configuration used by Create React App (https://www.npmjs.com/package/react-scripts)</li>
</ul>

<p>This project also uses ESLint, which includes the following dependencies:</p>
<ul>
  <li><b>babel-eslint</b></li>
  <li><b>eslint</b></li>
  <li><b>eslint-config-airbnb</b></li>
  <li><b>eslint-plugin-import</b></li>
  <li><b>eslint-plugin-jsx-a11y</b></li>
  <li><b>eslint-plugin-react</b></li>
</ul>

<p>Version information for each of these packages is available in the <b>package.json</b> file in the project root directory (<b>alpha</b>) directory.</p>

<p>After you clone the repository to a local directory, run the following command in the root directory to install the required dependencies:</p>
<pre>yarn install</pre>

###  <a name="start-server"></a> 5. Start the React development server.
<p>After performing all of the setup steps in the <b>Getting started</b> section, navigate to the project root directory (<b>alpha</b>) and run the following command to start the React development server.</p>
<pre>yarn start</pre>

<p>After the development server has started, a Chrome browser window should open, and you should see the landing/home screen. If the browser does not automatically open after the server starts, you can verify that the application is working locally on your computer by opening Chrome and going to <a href="http://localhost:3000">http://localhost:3000</a>. Note that by default, the development server will try to start up on port 3000. If port 3000 is already in use on your computer, then the development server will use a different port.

## <a name="deployment"></a> Deploying the app

This app is deployed to Firebase using Firebase Hosting. For more information on hosting with Firebase, see <https://firebase.google.com/docs/hosting/>. To deploy the app, you will need to build a production version of the app as well as have the Firebase CLI installed.

1. If not already installed, install the Firebase CLI globally by running the following command:
<pre>npm install -g firebase-tools</pre>

This installs the firebase command globally. To update to the latest version, simply re-run the same command.

2. To connect your local machine to your Firebase account and obtain access to the Firebase project, run the following command:
<pre>firebase login</pre>

3. Change directory to the  project root directory, <b>alpha</b>.

4. If you have deployed the app before, there will be a build directory inside <b>alpha</b>. Delete the existing <b>build</b> directory.

5. Run the following command to build a clean, production version of the app.
<pre>yarn build</pre>
<p>This command creates a directory called <b>build</b> inside of the <b>alpha</b> directory.</p>

6. Commit changes to git (if not done already).

7. Run the following command to deploy your changes:

```bash
firebase deploy
```

This command deploys the project to <https://alpha-41c92.firebaseapp.com/> on firebase.

## <a name="technologies-used"></a> Technologies used to create app

* [Back end technolgies](#Backend)
* [Front end technologies](#Frontend)
* [Other technologies](#Other)

### <a name ="Backend"></a> Back end technologies

* Firebase Hosting (<https://firebase.google.com/docs/hosting/>)

### <a name="Frontend"></a> Front end technologies

* HTML5
* CSS
* Javascript (ES6)
* React (<https://reactjs.org/>)
* CSS Grid system for page layout (<https://github.com/crowdfavorite/css-grid>)

### <a name="Other"></a> Other technologies

* ESLint

## <a name="future"></a> Direction for future development

Source code will be developed over time to handle bug fixes, incorporate new features, and add new projects I am working on.

The following is a list of potential enhancements for future code development.

* Add a blog page that I can use to go more in depth about particulatr projects that users have questions and comments about.
* Add a backend database that can be used to store blog posts, user comments/questions, my projects, resume data, etc.
* Add a contact form to the contact me page.

## <a name ="Issues"></a> Issues

<p>If you find an issue while using the app or have a request, <a href="https://github.com/philipstubbs13/alpha/issues/" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>