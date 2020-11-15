# Backend Coding test - Name Count Application

This repository was created to hold two tasks.

Task 1: Create a program that counts the number of times each name occurs in a passage of text, based on a list of names, and save the result to a file.

Task 2: Create a GET request to retrieve a name and the number of times it is mentioned in the passage of text.

## Install and setup

To install everything necessary on this project, navigate to the file location containing 'package.json' and run the command 'npm install' or 'npm i'. This command will install all necessary packages.

After this, to run task 1, use the following command from the same file locationa s the install: 'node src/nameCounter.js'/

The result of task 1 can be found in 'resources/ListOfNames.txt'. This is also the file location where the list of first names and the passage from oliver twist exist.

## REST API Requests

### Running the API

To run the API for task 2, use the command '' from the same file location as the npm install.

### GET request

Path: 'localhost:3000/name-count/{name}

This response is a GET request. The value {name} would represent the name you want to search for.

E.g. 'localhost:3000/name-count/Oliver' will return the following

Name: "Oliver"
Occurences: "316"

NB: This was primarily created for use with a browser. Applications such as Postman may not have the same response

