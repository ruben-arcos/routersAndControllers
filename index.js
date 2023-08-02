const express = require('express');
const bodyParser = require('body-parser');
// const users = require('./users')
const users = require('./routes/users.js') 

const app = express();
app.use(users)


app.use(bodyParser.json());
app.use(express.static('public'));



app.listen(3000, () => console.log('server started'));