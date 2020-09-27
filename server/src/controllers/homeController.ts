import {Request, Response} from 'express'
import path from 'path'

const getHomePage = (_req: Request, res: Response) => {
  var options = {
    root: path.join('./build', 'views')
  }
  res.sendFile('index.html', options)
}

export default {
  getHomePage
}