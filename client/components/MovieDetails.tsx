import React from 'react'
import { IMovieDetail } from '../../common/interfaces'

interface IProps
{
    detail: IMovieDetail
}

const MovieDetails = (props: IProps): JSX.Element => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.detail.title}</h1>
                <p className="field-title">Type</p>
                <p className="lead"><span className="badge badge-info">{props.detail.type}</span></p>

                <p className="field-title">Full Plot</p>
                <p className="lead">{props.detail.fullplot}</p>

                <p className="field-title">Year</p>
                <p className="lead">{props.detail.year}</p>

                <p className="field-title">Cast</p>
                <p className="lead">{props.detail.cast && props.detail.cast.join(', ')}</p>

                <p className="field-title">Genres</p>
                <p className="lead">{props.detail.genres && props.detail.genres.join(', ')}</p>

                <p className="field-title">Directors</p>
                <p className="lead">{props.detail.directors && props.detail.directors.join(', ')}</p>

                <p className="field-title">IMDB Rating</p>
                
                <p className="lead"><meter id="disk_c" value={props.detail.imdb && props.detail.imdb.rating} min="0" max="10"></meter> &nbsp;&nbsp; {props.detail.imdb && props.detail.imdb.rating}</p>

                <p className="field-title">Languages</p>
                <p className="lead">{props.detail.languages && props.detail.languages.join(', ')}</p> 

                <p className="field-title">Countries</p>
                <p className="lead">{props.detail.countries && props.detail.countries.join(', ')}</p>   

                <p className="field-title">Runtime</p>
                <p className="lead">{`${props.detail.runtime} mins`}</p>

                <p className="field-title">Rated</p>
                <p className="lead">{props.detail.rated}</p>                              
            </div>
        </div>
    )
}

export default MovieDetails