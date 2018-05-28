const express = require('express');
const router = express.Router(); 
const url = require('url');
async = require('async');

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Show petani
router.get('/', (req,res)=>{
    res.render('login/index'); 
});

//Show petani
router.post('/login', (req,res)=>{
    sess=req.session;
    mysqlConnection.query('SELECT * '+
                            'FROM '+
                            'tbluser '+
                            'WHERE username = ? AND password = ?',
                            [String(req.body.username), String(req.body.password)],
                            (err, rows, fields)=>{
                        if(rows.length > 0){
                            sess.idUser = rows[0].idUser;
                            res.json(rows); 
                        } else {
                            res.send("error");
                        }
    }); 
});

router.get('/logout',function(req,res){
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
});

module.exports = router;