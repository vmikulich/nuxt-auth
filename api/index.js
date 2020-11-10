import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import autRouter  from './routers/auth'

dotenv.config()

const app = express()

const router = express.Router()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => {
    console.log(error)
  })

app.use('', autRouter)

export default {
  path: '/api',
  handler: app
}
