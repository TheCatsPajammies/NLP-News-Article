# Evaluate a News Article with Natural Language Processing.

## Project Summary

This is the 4th project for the [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program. The main purpose of this application is to evaluate the sentiment of an article URL submitted by the user which is then analyzed by the [Meaning Cloud API](https://www.meaningcloud.com/products/sentiment-analysis) based on the article's content. Once the article is analyzed, the results are then displayed dynamically in the browser. 

## Project Lessons

* How to hide sensitive authorization info in a .env file using dotenv
* Using Jest to test form submission functionality
* Using build tools to easily bundle an app for distribution

## Main Languages and Tools Utilized

* HTML, CSS, SCSS, Javascript
* Node
* Jest
* Express
* Webpack
* Workbox

## Instructions for installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone <repo>
```
3. Install npm
```
npm install
```
4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
6. Start the project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

7. Open browser at http://localhost:3030/


