const mysql = require('mysql')

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'perkuliahan',
})

db.connect((err) => {
    if(err) throw err;
    console.log('connected to mysql')
})

module.exports = db