const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Init express
const app = express();
//Make date simply
app.locals.moment = require('moment');
//Load view engine
app.set('views', path.join(__dirname,'/views/'));
app.set('view engine','pug');

//Parse application/json
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Set public folder
app.use(express.static(__dirname + '/public/'));

//Router files 
let sapi = require('./routes/sapi');
app.use('/sapi', sapi);

app.listen(3000,()=>console.log('Express server is running in port 3000...'));
