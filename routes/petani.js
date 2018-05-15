const express = require('express');
const router = express.Router();
async = require('async');

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Show petani
router.get('/', (req,res)=>{
    res.render('petani/index'); 
});

//Show petani
router.get('/showPetani', (req,res)=>{
    mysqlConnection.query('SELECT '+
                                'noKTP, '+
                                'nama, '+
                                'alamat, '+
                                'daerah, '+
                                'kontak '+
                            'FROM '+
                                'tblpetani',(err, results)=>{
        if(!err){
            res.json(results);
        } else {
            console.log(err);
        }
    });
});

//Add petani
router.post('/save', (req,res)=>{
    mysqlConnection.query('INSERT INTO tblpetani VALUES (?,?,?,?,?)',
        [req.body.noKTP, String(req.body.nama), String(req.body.alamat), String(req.body.daerah), String(req.body.kontak)],
        (err, rows, fields)=>{
        if(!err){
            res.json('success');
        } else {
            console.log(err);
        }
    });
});

module.exports = router;