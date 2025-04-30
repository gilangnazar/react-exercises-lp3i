const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./db');

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello from backend crud perkuliahan formatif')
})

app.get('/perkuliahan', (req, res) => {
    const query = 'select * from mahasiswa join jurusan on mahasiswa.KodeJurusan = jurusan.KodeJurusan'
    
    db.query(query, (err, result) => {
        if(err){
            res.status(500).json({
                status: false,
                msg: 'server error',
                err: err
            })
        } else if(result.affectedRows === 0) {
            res.status(400).json({
                status: false,
                msg: 'Table not exist',
                err: err
            })
        } else {
            res.status(200).json({
                status: true,
                msg: 'Getting Data success',
                data: result 
            })
        }
    })
})

app.get('/jurusan', (req, res) => {
    const query = 'select * from jurusan'
    
    db.query(query, (err, result) => {
        if(err){
            res.status(500).json({
                status: false,
                msg: 'server error',
                err: err
            })
        } else if(result.affectedRows === 0) {
            res.status(400).json({
                status: false,
                msg: 'Table not exist',
                err: err
            })
        } else {
            res.status(200).json({
                status: true,
                msg: 'Getting Data Jurusan success',
                data: result 
            })
        }
    })
})

app.post('/perkuliahan', (req, res) => {
    const formData = {
        NIM: req.body.NIM,
        Nama: req.body.Nama,
        TanggalLahir: req.body.TanggalLahir,
        StatusPernikahan: req.body.StatusPernikahan,
        Agama: req.body.Agama,
        Alamat: req.body.Alamat,
        KodeJurusan: req.body.KodeJurusan,
        BiayaKuliah: req.body.BiayaKuliah
    }

    console.log("data from react: ",req.body);

    const query = 'insert into mahasiswa set ?'
    
    db.query(query, [formData],(err, result) => {
        if(err){
            res.status(500).json({
                status: false,
                msg: 'server error',
                err: err
            })
        } else if(result.affectedRows === 0) {
            res.status(400).json({
                status: false,
                msg: 'error when creating new data',
                err: err
            })
        } else {
            res.status(200).json({
                status: true,
                msg: 'new data created',
                data: result 
            })
        }
    })
})


app.listen(port, () => {
    console.log(`app running at port: ${port}`)
})