const express = require('express');
const router = express.Router();
async = require('async');

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Show petani
router.get('/', (req,res)=>{
    res.render('login/index'); 
});

//Show petani
router.post('/login', (req,res)=>{
    mysqlConnection.query('SELECT * '+
                            'FROM '+
                            'tblsapi spi '+
                            'WHERE username = ? AND password = ?',
                            [req.body.username,req.body.password],
                            (err, rows, fields)=>{
                        if(!err){
                            var msg = {
                                "privileges" : rows.privileges
                            };
                            res.json(JSON.stringify(msg));
                        } else {
                            console.log(err);
                        }
    }); 
});

module.exports = router;