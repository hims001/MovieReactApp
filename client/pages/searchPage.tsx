import React, { useState } from "react"
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import { ISearchAppState, IMovie } from "../../common/interfaces"
import { fetchPost }  from "../../common/fetchAPI"

const SearchPage = (): JSX.Element => {
    const [keyword, setKeyword] = useState("");

    const [appState, setAppState] = useState<ISearchAppState>({
        isKeywordTyped: false,
        isLoading: false,
        moviesData: []
      });
      
      const onSubmit = (e: any) => {  
        e.preventDefault() 
        let isKeywordTyped = (keyword !== undefined)
        setAppState({ isKeywordTyped: isKeywordTyped, isLoading: true, moviesData: [] });                
        fetchPost("/api/findMovies", {keyword: keyword})
          .then((data) => {
              setTimeout(() => {
                setAppState({ 
                    isKeywordTyped: isKeywordTyped, 
                    isLoading: false, 
                    moviesData: data as IMovie[] });                
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