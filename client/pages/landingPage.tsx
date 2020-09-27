import React, { useEffect, useState } from "react";
import Movies from "../components/Movies"
import Loading from "../components/loading"

const LandingPage = () => {

    const [appState, setAppState] = useState({
        isLoading: true,
        moviesData: null
      });
      
      useEffect(() => {
        setAppState({ isLoading: true, moviesData: null });
        const apiUrl = `http://localhost:4000/api/getMovies`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
              setTimeout(() => {
                setAppState({ isLoading: false, moviesData: data });
              }, 1000);            
          })
          .catch((err) => { throw err });
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
