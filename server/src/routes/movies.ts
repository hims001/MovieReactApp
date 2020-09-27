import { Router } from "express"
import model from '../models/moviesModel'

export default (router: Router) => {
    router.get('/getMovies', (_req, res) => {
        model.fetchData((docs: any) => res.json(docs))
    })

    router.post('/findMovies', (req, res) => {
        model.fetchData((docs: any) => res.json(docs), req.body.keyword)
    })

    router.get('/getMovieDetailsById/:id', (req, res) => {
        model.getById((doc: any) => res.json(doc), req.params.id)
    })    
}