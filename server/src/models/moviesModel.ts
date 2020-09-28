import mongoose from "mongoose"
import { IMovie } from "../../../common/interfaces"

const moviesSchema = new mongoose.Schema({
  title: {type: String},
  plot: {type: String}
})

const moviesModel = mongoose.model<IMovie>('Movie', moviesSchema, 'movies')

const fetchData = (callback: Function, keyword = undefined) => {
    let query = {}, limit = 4
    if (keyword !== undefined)
    {
      query = { title: { "$regex": keyword, "$options": "i" }  }
      limit = 10
    }
    moviesModel.find(query)
    .select({title: 1, plot: 1})
    .sort({released: -1})
    .limit(limit)
    .exec(function(err, data){
      if(err) throw err;
      return callback(data);
    })
}

const getById = (callback: Function, id:any ) => {
  moviesModel.findById(id, 'title plot fullplot runtime rated year genres cast directors languages countries imdb type')
  .exec(function(err, data){
    if(err) throw err;
    return callback(data);
  })
}

export default {
  fetchData,
  getById
}