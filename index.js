const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');

//Init express
const app = express();

app.use(session({
    secret: 'cookie_secret',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

//Make date simply
app.locals.moment = require('moment');

//Load view engine
app.set('views', path.join(__dirname,'/views/'));
app.set('view engine','pug');

//Parse application/json
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

//Set public folder
app.use(express.static(__dirname + '/public/'));

//Router files 
let sapi = require('./routes/sapi');
app.use('/sapi', sapi);
let petani = require('./routes/petani');
app.use('/petani', petani);
let login = require('./routes/login');
app.use('/', login);

app.listen(3000,()=>console.log('Express server is running in port 3000...'));
