import React, { useState } from "react"
import Loading from "../components/loading";
import Movies from "../components/Movies";

const SearchPage = () => {
    const [keyword, setKeyword] = useState("");

    const [appState, setAppState] = useState({
        isKeywordTyped: false,
        isLoading: false,
        moviesData: null
      });
      
      const onSubmit = (e: any) => {  
        e.preventDefault() 
        let isKeywordTyped = (keyword !== undefined)
        setAppState({ isKeywordTyped: isKeywordTyped, isLoading: true, moviesData: null });        
        const apiUrl = `http://localhost:4000/api/findMovies`;                
        fetch(apiUrl, {
            method: 'post',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({keyword: keyword})
          })
          .then((res) => res.json())
          .then((data) => {
              setTimeout(() => {
                setAppState({ isKeywordTyped: isKeywordTyped, isLoading: false, moviesData: data });                
              }, 1000);                        
          })
          .catch((err) => { throw err });
      };
      
    return (
          <>
            <div className="row bg">
                <div className="col-sm-12 col-md-12">
                <form onSubmit ={onSubmit}>
                    <div className="form-group">
                    <input type="text" className="form-control" onChange={(e) => setKeyword(e.target.value)} placeholder="Let's find your favourite movie..." />
                    </div>
                </form>
                </div>
            </div>
            <div className="row movies-list justify-content-md-center">
                {
                    !appState.isKeywordTyped ? <></> : appState.isLoading ? <Loading /> :
                    <Movies moviesList={ appState.moviesData }/>
                }
            </div>
          </>
    )}

export default SearchPage