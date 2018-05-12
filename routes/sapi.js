const express = require('express');
const router = express.Router();

//Import modelsapi.
let mysqlConnection = require('../models/connection');

//Get all sapi JOIN petani
router.get('/', (req,res)=>{
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
        res.render('sapi/index',{
            dataSapi: rows
        });
    } else {
        console.log(err);
    }
    });
});

//Get sapi based on berat
router.post('/berat/:berat',(req,res)=>{
    mysqlConnection.query('SELECT '+
        'idSapi, '+
        'spi.noKTP, '+
        'jenis, '+
        'daerah, '+
        'umur, '+
        'tgl_awal, '+
        'berat_awal, '+
        '( DATEDIFF( NOW( ), tgl_awal ) * ? ) + berat_awal AS berat_saat_ini, '+
        '( DATEDIFF( DATE_ADD( tgl_awal, INTERVAL + 1 MONTH ), tgl_awal ) * ? ) + berat_awal AS berat_satu_bulan, '+
        '( DATEDIFF( DATE_ADD( tgl_awal, INTERVAL + 3 MONTH ), tgl_awal ) * ? ) + berat_awal AS berat_tiga_bulan  '+
    'FROM '+
        'tblsapi spi '+
        'JOIN tblpetani ptn ON spi.noKTP = ptn.noKTP',[req.params.berat,req.params.berat,req.params.berat],(err, rows, fields)=>{
    if(!err){
        res.send(rows);
    } else {
        console.log(err);
    }
    });
});

//Get detail petani
router.post('/getPetani/:noKTP',(req,res)=>{
    mysqlConnection.query('SELECT '+
                                'noKTP, '+
                                'nama, '+
                                'alamat, '+
                                'daerah, '+
                                'kontak '+
                            'FROM '+
                                'tblpetani '+
                            'WHERE noKTP = ?',[req.params.noKTP],(err, rows, fields)=>{
    if(!err){
        res.send(rows);
    } else {
        console.log(err);
    }
    });
});

module.exports = router;