import React from "react";
import '../../build/css/style.css'
import { IMovie } from "../../common/interfaces";

interface IProps
{
    moviesList: IMovie[]
}

const Movies = (props: IProps): JSX.Element => {
    return (
        <>
        {   props.moviesList.length == 0 ? <h2>Aww...This film yet to be created</h2> :
            props.moviesList.map((movie: any, key: number) =>  (    
            <div className="col-sm-4 col-md-3 card-margin" key={key}>
                <div className="card">
                    <div className="card-body">
                        <img className="poster img-fluid" height="300" width="150" alt="Image not available" />
                        <div className="card-title" title={movie.title}>{movie.title}</div>
                        <div className="card-text">{movie.plot}</div>
                        <a href={`/details/${movie._id}`} className="btn btn-info">Details</a>
                    </div>
                </div>
            </div>        
            ))
            
        }
        </>
    )
}

export default Movies;