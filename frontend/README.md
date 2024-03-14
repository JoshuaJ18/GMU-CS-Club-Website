# This is the frontend of the GMU CS Clubs website. It was created using ReactJS and Node.js

## What to do when you first clone this repo:
1. Open up a terminal
2. CD into the frontend folder
3. Run this command in the terminal (must have node.js installed):
    ```bash
    npm i
    ```
4. You are all set!

## How to run the website locally for testing:
1. First make sure you are CD'd into the frontend folder
2. Then run the command:
    ```bash 
    npm start
    ```
3. Wait for the server to start, then go to http://localhost:3000 on any browser and you should see the website

## Basic File structure:
The src folder within the frontend folder will have everything you need for updating the website. 

If you would like to add a page to the website, create a JavaScript file in the pages folder, and then a matching
CSS file in the pages_css folder. 

Once you are done, import your new page to the App.js folder within the src folder and add it to the routes.
A "route" is a webpage in React. So new routes are new webpages.

The index.js file is used to render the different webpages and routes. If we didn't want to use routes, we could just skip the App.js file
and import each page into index.js and just add something like:
```JavaScript
<Home />
```
under the "React.Strictmode" tab.
