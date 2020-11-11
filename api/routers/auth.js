import express from 'express'
import controller from '../controllers/auth'

const router = express.Router()

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.post('/registration', controller.register)

export default router