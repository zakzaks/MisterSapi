const express = require('express');
const router = express.Router();
async = require('async');

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Get all sapi JOIN petani
router.get('/', (req,res,next)=>{
    async.parallel(
        [
            function (callback) {
                mysqlConnection.query('SELECT '+
                'noKTP, '+
                'nama, '+
                'alamat, '+
                'daerah, '+
                'kontak '+
            'FROM '+
                'tblpetani',(err, petani)=>{callback(err,petani);
                });
            }
        ],
        function (err, results) {
            var data = {dataPetani: results[0]};
            res.render('petani/index',data); 
        }
    );
});

//Add petani
router.post('/add', (req,res,next)=>{
    res.render('petani/add'); 
});

//Add petani
router.post('/save', (req,res,next)=>{
    async.parallel(
        [
            function (callback) {
                mysqlConnection.query('INSERT INTO tblpetani VALUES (?,?,?,?,?)',
                [String(req.body.noKTP), String(req.body.nama), String(req.body.alamat), String(req.body.daerah), String(req.body.kontak)],
                (err, results)=>{callback(err,results);
                });
            }
        ],
        function (err, results) {
            res.redirect('/petani/'); 
        }
    );
});

module.exports = router;