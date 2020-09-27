import React from "react"
import LandingPage from './landingPage'
import SearchPage from './searchPage'
import { Route } from 'react-router-dom'
import DetailsPage from "./detailsPage"

const homeLayoutPage = () => {
    return (
        <>
            <Route path="/index" component={ LandingPage } exact />
            <Route path="/search" component={ SearchPage } />
            <Route path="/details/:id" component={ DetailsPage } />
        </>
    )}

export default homeLayoutPage

