import express from 'express'
import mongoose from 'mongoose'
import autRouter  from './routers/auth'

const app = express()

const router = express.Router()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

mongoose.connect(`mongodb+srv://Vlad:qazxcvbnm123@coursework.k9oqd.mongodb.net/todo?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => {
    console.log(error)
  })

app.use('', autRouter)

export default {
  path: '/api',
  handler: app
}
