const express = require('express');
const router = express.Router(); 
const url = require('url');
async = require('async');

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Show petani
router.get('/', (req,res)=>{
    var queryData = url.parse(req.url, true).query;
    mysqlConnection.query('SELECT * '+
                            'FROM '+
                                'tbluser '+
                            'WHERE username = ? AND password = ?',
                                [queryData.username, queryData.password], function (error, results, fields) {
                            if(error){
                                res.send(JSON.stringify("Fail")); 
                                console.log("fail");
                                //If there is error, we send the error in the error section with 500 status
                            } else {
                                res.send(JSON.stringify("Success"));
                                console.log("success")
                                //If there is no error, all is good and response is 200OK.
                            }
    });
});

module.exports = router;