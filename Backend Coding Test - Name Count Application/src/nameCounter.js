'use strict'

const fs = require('fs');

let data = fs.readFileSync('./resources/oliver-twist.txt', 'utf8');
let names = fs.readFileSync('./resources/first-names.txt', 'utf8');
let listOfNames = names.split('\r');
let namesObject = {};

// This resets the file upon program startup 
fs.writeFile('./resources/ListOfNames.txt', 'List of names that appear in Oliver twist by number of appearances' + '\n\n', function (err) {
    if (err) throw err;
});

// Using the listOfNames from first-names.txt, creates an object containing all names with a base value of 0
for (let i=0; i<listOfNames.length; i++) {
    let temp = listOfNames[i];
    namesObject[temp] = 0;
};

// Splits the Oliver Twist text into each individual word
const dataSplitByWord = data.split(' ');

// Checks whether a word from the Oliver Twist file is in the name object.
// This function also makes sure that the name starts with a Capital letter, for extra accuracy
for (let i=0; i<dataSplitByWord.length; i++) {
    if (dataSplitByWord[i][0] == undefined){
        continue;
    } else if (dataSplitByWord[i][0] == dataSplitByWord[i][0].toUpperCase()) {
        if (dataSplitByWord[i] in namesObject) {
            namesObject[dataSplitByWord[i]] = namesObject[dataSplitByWord[i]] + 1;
        }
    }
}

// The following two functions first set the object to an arry, then sort said array
const namesArray = Object.keys(namesObject).map(function(key) {
    return [key, namesObject[key]];
});
  
namesArray.sort(function(first, second) {
    return second[1] - first[1];
});
  
// This function adds all names and their respective values to ListOfNames.txt
// It also makes sure that any names not mentioned will not appear in the file.
for(let i=0; i<namesArray.length; i++) {
    if (namesArray[i][1] == 0) {
        continue;
    } else {
        fs.appendFile('./resources/ListOfNames.txt', namesArray[i].toString() + '\n', function (err) {
            if (err) throw err;
        })
    }
}
