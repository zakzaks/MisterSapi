const express = require('express');
const router = express.Router();
async = require('async');

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Show petani
router.get('/', (req,res)=>{
    sess = req.session
    res.render('petani/index',{
        idUser : sess.idUser
    }); 
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
    sess = req.session
    mysqlConnection.query('INSERT INTO tblpetani VALUES (?,?,?,?,?,?,NOW())',
        [String(req.body.noKTP), String(req.body.nama), String(req.body.alamat), String(req.body.daerah), String(req.body.kontak), sess.idUser],
        (err, rows, fields)=>{
        if(!err){
            res.json('success');
        } else {
            console.log(err);
        }
    });
});

module.exports = router;