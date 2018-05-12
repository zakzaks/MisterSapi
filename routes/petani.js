const express = require('express');
const router = express.Router();

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Get all sapi JOIN petani
router.get('/', (req,res)=>{
    mysqlConnection.query('SELECT '+
                                'noKTP, '+
                                'nama, '+
                                'alamat, '+
                                'daerah, '+
                                'kontak '+
                            'FROM '+
                                'tblpetani',(err, rows, fields)=>{
    if(!err){
        res.render('petani/index',{
            dataPetani: rows
        });
    } else {
        console.log(err);
    }
    });
});

module.exports = router;