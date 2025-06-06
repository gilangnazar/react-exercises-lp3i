const bcrypt = require('bcrypt');
const db = require('./db');

async function addUser() {
    const username = 'user1';
    const pass = '123123';

    try {
        const hashedPassword = await bcrypt.hash(pass, 10);
        const [res] = await db.execute('insert into users(username, password) values(?, ?)', [username, hashedPassword]);
        console.log(`user ${username}, berhasil ditambahkan dengan ID: ${res.insertId}`);
    } catch (error) {
        console.log('error inserting user data', error);
    } finally {
        process.exit();
    }
}

addUser();