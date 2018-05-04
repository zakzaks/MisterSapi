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
    mysqlConnection.query('SELECT '+
                                'idSapi, '+
                                'spi.noKTP, '+
                                'jenis, '+
                                'daerah, '+
                                'umur, '+
                                'tgl_awal, '+
                                'berat_awal, '+
                                '( DATEDIFF( NOW( ), tgl_awal ) * 0.8 ) + berat_awal AS berat_saat_ini, '+
                                '( DATEDIFF( DATE_ADD( tgl_awal, INTERVAL + 1 MONTH ), tgl_awal ) * 0.8 ) + berat_awal AS berat_satu_bulan, '+
                                '( DATEDIFF( DATE_ADD( tgl_awal, INTERVAL + 3 MONTH ), tgl_awal ) * 0.8 ) + berat_awal AS berat_tiga_bulan  '+
                            'FROM '+
                                'tblsapi spi '+
                                'JOIN tblpetani ptn ON spi.noKTP = ptn.noKTP',(err, rows, fields)=>{
        if(!err){
            res.render('index',{
                dataSapi: rows
            });
        }else{
            console.log(err);
        }
    });
});

//Get data berat sapi
app.get('/sapi/beratSatu', (req,res)=>{
    mysqlConnection.query('SELECT '+
	                            '(DATEDIFF( NOW( ), tgl_awal ) * 0.8) + berat_awal AS BeratTotal '+ 
                            'FROM '+
                                'tblsapi',(err, rows, fields)=>{
        if(!err){
            res.render(newFunction(),{
                beratSapi: rows
            });
        }else{
            console.log(err);
        }
    });
});

function newFunction() {
    return 'index';
}
