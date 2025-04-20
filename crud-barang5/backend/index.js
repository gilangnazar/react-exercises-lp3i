const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {body, validationResult} = require('express-validator')

const db = require('./db')

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

app.post('/tambahbarang', [
    // array validation
    body('NamaBarang').notEmpty(),
    body('Harga').notEmpty(),
    body('Quantity').notEmpty(),    
    body('KodeBarang').notEmpty()
],(req, res) => {
    const validationErr = validationResult(req)

    if(!validationErr.isEmpty()) {
        return res.status(422).json({
            err: validationErr.array()
        })
    }

    let formData = {
        NamaBarang : req.body.NamaBarang,
        Harga : req.body.Harga,
        Quantity : req.body.Quantity,
        KodeBarang : req.body.KodeBarang
    }

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

app.listen(port, () => {
    console.log(`app running at port: ${port}`)
})