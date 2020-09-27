import express from 'express'
import movies from './movies'

const router = express.Router()

movies(router)

export default router