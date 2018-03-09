const express = require('express');
const app = express();

app.use(express.static('./public'));

app.listen(5000, function() {
    console.log('server listenning on port 5000!') 
});