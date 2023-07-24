import express from 'express'

const PORT = 3000
const app = express()

// This is a request listener, just like in "vanilla Node"
app.get('/', (req, res) => res.send({ info: `Hello World!` }))

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))