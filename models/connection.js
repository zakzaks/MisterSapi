const mysql = require('mysql');

//MuSQL Connection
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbsapi'
});

//Checking Connection
mysqlConnection.connect((err)=>{
    if(!err){
        console.log('DB connection succeded');
    } else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err,undefined,2));
    }
});

module.exports = mysqlConnection;