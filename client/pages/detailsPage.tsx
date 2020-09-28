import React, { useEffect, useState } from "react"
import Loading from "../components/Loading";
import MovieDetails from "../components/MovieDetails";
import { IDetailAppState, IMovieDetail } from "../../common/interfaces"
import { fetchGet }  from "../../common/fetchAPI"

const DetailsPage = (props: { match: any }): JSX.Element => {
    const [appState, setAppState] = useState<IDetailAppState>({
        isLoading: true,
        movieData: {}
      });
      
      useEffect(() => {
        setAppState({ isLoading: true, movieData: {} });
        const apiUrl = `/api/getMovieDetailsById/${props.match.params.id}`;
        fetchGet(apiUrl)
        .then((data) => {
            setTimeout(() => {
            setAppState({ isLoading: false, movieData: data as IMovieDetail });
            }, 1000);            
        })
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

