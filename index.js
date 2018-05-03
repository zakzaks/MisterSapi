const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Init express
const app = express();
//Make date simply
app.locals.moment = require('moment');
//Load view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

//Parse application/json
app.use(bodyParser.json());

//Set public folder
app.use(express.static(path.join(__dirname,'public')));

//MuSQL Connection
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbsapi'
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('DB connection succeded');
    } else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err,undefined,2));
    }
});

app.listen(3000,()=>console.log('Express server is running in port 3000...'));

//Get all sapi JOIN petani
app.get('/sapi', (req,res)=>{
    mysqlConnection.query('SELECT * FROM '+ 
                            'tblsapi s JOIN tblpetani p ON s.noKTP = p.noKTP ',(err, dataSapi, fields)=>{
        if(!err){
            res.render('index',{
                dataSapi: dataSapi
            });
        }else{
            console.log(err);
        }
    });
});