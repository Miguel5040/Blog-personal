import express from 'express'
import 'dotenv/config'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Motso!')
})

// Configuracion y middleware

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servirdor express escuchando en el puerto: ' + PORT)
})


