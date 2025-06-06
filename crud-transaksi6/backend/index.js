const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// const transaksiRoutes = require('./routes/transaksiRoutes')


const db = require('./db');

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello from backend crud barang')
})

app.get('/barang', (req, res) => {
    db.query('select * from barang', (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

app.get('/listbarang', (req, res) => {
    db.query('select KodeBarang, NamaBarang, Harga from barang', (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

app.post('/tambahbarang',(req, res) => {

    let formData = {
        NamaBarang : req.body.NamaBarang,
        Harga : req.body.Harga,
        Quantity : req.body.Quantity,
        KodeBarang : req.body.KodeBarang
    }

    console.log('data from react: ', formData)

    db.query('insert into barang set ?', formData, (err, rows) => {
        if(err) {
            return res.status(500).json({
                status: false,
                msg: 'internal server error'
            })
        } else {
            return res.status(201). json({
                status: true,
                msg: 'data inserted',
                data: rows[0]
            })
        }
    })
})

app.put('/editbarang', (req, res) => {
    const {NamaBarang, Harga, Quantity, KodeBarang} = req.body

    const query = 'update barang set NamaBarang = ?, Harga = ?, Quantity = ? where KodeBarang = ?;'

    db.query(query, [NamaBarang, Harga, Quantity, KodeBarang], (err, result) =>{
        if(err) {
            return res.status(500).json({
                status: false,
                msg: 'internal server error'
            })
        } else if(result.affectedRows === 0){
            return res.status(404).json({
                status: false,
                msg: "KodeBarang not Found"
            })
        } else {
            return res.status(201). json({
                status: true,
                msg: 'data updated',
                data: result[0]
            })
        }
    })
})

app.delete('/deletebarang/:KodeBarang', (req, res) => {
    const {KodeBarang} = req.params

    const query = 'delete from barang where KodeBarang = ?;'

    db.query(query, [KodeBarang], (err, result) =>{
        if(err) {
            return res.status(500).json({
                status: false,
                msg: 'internal server error'
            })
        } else if(result.affectedRows === 0){
            return res.status(404).json({
                status: false,
                msg: "KodeBarang not Found"
            })
        } else {
            return res.status(200). json({
                status: true,
                msg: 'data deleted',
                data: result[0]
            })
        }
    })
})

// Transaksi Routes
app.get('/transaksi', (req, res) => {
    db.query('select * from transaksi join barang on transaksi.KodeBarang = barang.KodeBarang', (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

app.post('/transaksi',(req, res) => {

    let formData = {
        NoTransaksi : req.body.NoTransaksi,
        TanggalTransaksi : req.body.TanggalTransaksi,
        KodeBarang : req.body.KodeBarang,
        Quantity : req.body.Quantity,
        Total : req.body.Total
    }

    db.query('insert into transaksi set ?', formData, (err, rows) => {
        if(err) {
            return res.status(500).json({
                status: false,
                msg: 'internal server error',
                err: err
            })
        } else {
            return res.status(201). json({
                status: true,
                msg: 'data transaksi inserted',
                data: rows[0]
            })
        }
    })
})

app.put('/transaksi', (req, res) => {
    const {NoTransaksi, TanggalTransaksi, KodeBarang, Quantity, Total} = req.body

    const query = 'update transaksi set TanggalTransaksi = ?, KodeBarang = ?, Quantity = ?, Total = ? where NoTransaksi = ?;'

    db.query(query, [TanggalTransaksi, KodeBarang, Quantity, Total, NoTransaksi], (err, result) =>{
        if(err) {
            return res.status(500).json({
                status: false,
                msg: 'internal server error',
                err: err
            })
        } else if(result.affectedRows === 0){
            return res.status(404).json({
                status: false,
                msg: "NoTransaksi not Found"
            })
        } else {
            return res.status(201). json({
                status: true,
                msg: 'data transaksi updated',
                data: result[0]
            })
        }
    })
})

app.delete('/transaksi/:NoTransaksi', (req, res) => {
    const {NoTransaksi} = req.params

    const query = 'delete from transaksi where NoTransaksi = ?;'

    db.query(query, [NoTransaksi], (err, result) =>{
        if(err) {
            return res.status(500).json({
                status: false,
                msg: 'internal server error',
                err: err
            })
        } else if(result.affectedRows === 0){
            return res.status(404).json({
                status: false,
                msg: "NoTransaksi not Found"
            })
        } else {
            return res.status(200). json({
                status: true,
                msg: 'data transaksi deleted',
                data: result[0]
            })
        }
    })
})


// app.use('/transaksi', transaksiRoutes)

app.listen(port, () => {
    console.log(`app running at port: ${port}`)
})