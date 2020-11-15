const express = require('express');
const lineReader = require('line-reader');

const app = express();

// defining the get endpoint
app.get('/name-count/:name', async (req, res) => {
    lineReader.eachLine('./resources/ListOfNames.txt', async function(line) {
        console.log(line);
        let temp = line.split(',');
        console.log(temp);
        if (temp[0] == req.params.name) {
            res.send({
                'Name': req.params.name,
                'Occurences': temp[1]
            });
        }
    });

    // Future updates will include error messages if name not found

});
  
  // starting the server
app.listen(3000, () => {
    console.log('listening on localhost:3000');
});
