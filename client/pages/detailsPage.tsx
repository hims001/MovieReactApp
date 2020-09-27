import React, { useEffect, useState } from "react"
import Loading from "../components/loading";
import MovieDetails from "../components/MovieDetails";

const DetailsPage = (props: any) => {
    const [appState, setAppState] = useState({
        isLoading: true,
        movieData: null
      });
      
      useEffect(() => {
        setAppState({ isLoading: true, movieData: null });
        const apiUrl = `http://localhost:4000/api/getMovieDetailsById/${props.match.params.id}`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
              setTimeout(() => {
                setAppState({ isLoading: false, movieData: data });
              }, 1000);            
          })
          .catch((err) => { throw err });
      }, [setAppState]);
      
    return (
        <>
            { 
                appState.isLoading ? <Loading /> :
                <MovieDetails detail={ appState.movieData }/>
            }
        </> 
    )}

export default DetailsPage

