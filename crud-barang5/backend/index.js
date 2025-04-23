const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {body, validationResult} = require('express-validator')

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

app.listen(port, () => {
    console.log(`app running at port: ${port}`)
})