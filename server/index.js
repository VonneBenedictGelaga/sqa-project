const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// app check
app.get('/', (req, res) => res.sendStatus(200))

app.listen(4000, () => {
    console.log(`Listening: http://localhost:${4000}`);
})