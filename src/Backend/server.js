const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors({
   origin: 'http://localhost:3000',
   optionsSuccessStatus: 200 
}))

const port = process.env.PORT || 5000
app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.listen(port, () =>{
    console.log(`Meu servidor está rodando na porta ${port}`)
})