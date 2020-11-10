import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'

async function login (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      req.session.user = { email: candidate.email}
      const token = jwt.sign({
        userId: candidate._id,
        email: candidate.email
      }, `dev-jwt`, {expiresIn: 3600})
      req.session.token = token
      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      res.status(401).json({
        message: 'Passwords do not match.'
      })
    }
  } else {
    res.status(404).json({
      message: 'User with this email is not found.'
    })
  }
}

  export default {
    login
  }