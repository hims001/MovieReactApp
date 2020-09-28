import React, { useEffect, useState } from "react";
import Movies from "../components/Movies"
import Loading from "../components/Loading"
import { ILandingAppState, IMovie } from "../../common/interfaces"
import { fetchGet } from "../../common/fetchAPI"

const initialState = {
    isLoading: true,
    moviesData: []
  }

type PageState = Readonly<ILandingAppState>

const LandingPage = (): JSX.Element => {

    const [appState, setAppState] = useState<PageState>(initialState);
      
      useEffect(() => {
        setAppState({ isLoading: true, moviesData: [] });
        fetchGet(`/api/getMovies`)
        .then((data) =>                         
            setTimeout(() => {
                setAppState({ isLoading: false, moviesData: data as IMovie[] });
                }, 1000)
        )
      }, [setAppState]);
      
    return (
        <>
            <div className="row latest-movies-label">
                <div className="col-sm-12 col-md-12">
                    Latest Movies
                </div>
            </div>            
            { 
                appState.isLoading ? <Loading /> :
                <div className="row movies-list">
                    <Movies moviesList={ appState.moviesData }/>
                </div>
            }
        </> 
    )}

export default LandingPage
