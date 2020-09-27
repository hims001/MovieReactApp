import express from 'express'
import homeController from '../controllers/homeController'

const homeRouter = express.Router()
const { getHomePage } = homeController

homeRouter.route('*').get(getHomePage)

export default homeRouter