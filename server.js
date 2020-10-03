//? set env variables
const dotEnv = require('dotenv')
dotEnv.config()

//? imports
const cors = require('cors')
const express = require('express')

//? express
const app = express()
const PORT = process.env.PORT

//? middlewares
app.use(cors())
app.use(express.json())
app.use((err, _req, res, next) => {
  console.log(err.message)
  if (err)
    return res.status(err.status).json({
      error: 'Bad request. Usually means a malformed JSON, check the syntax.'
    })
  next()
})

//? database connection
const db = require('./database')
db.authenticate()
  .then(() => console.log('DB connected.'))
  .then(() =>
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
  )
  .catch(error => console.log(error.message))

//? routes
app.get('/', (_req, res) => res.send('Home'))
app.use('/expense', require('./routes/Expense'))
app.use('/user', require('./routes/User'))
app.use('/category', require('./routes/Category'))
