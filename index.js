const express = require('express')
const StudentRouter = require('./router/studentRouter')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/student',StudentRouter)

app.get('/', (req, res) => res.send('Welcome to express'))


app.listen(port, () => console.log(` App listening on port ${port}!`))