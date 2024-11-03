const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port:3306,
    // ssl:{
    //     rejectUnauthorized: true
    // }
})
// module.exports = pool.promise()

connection.connect(err => {
    if(err){
        return console.error('Erro ao conectar', err)
    }
    console.log('Conexão ao DB estabelida com sucesso!')
    connection.end()
})