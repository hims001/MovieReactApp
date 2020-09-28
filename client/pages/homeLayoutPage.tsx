import React from "react"
import LandingPage from './landingPage'
import SearchPage from './searchPage'
import { Route, Switch } from 'react-router-dom'
import DetailsPage from "./detailsPage"
import NotFoundPage from "./notFoundPage"

const homeLayoutPage = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/index" component={ LandingPage } exact />
            <Route path="/search" component={ SearchPage } />
            <Route path="/details/:id" component={ DetailsPage } />
            <Route component={ NotFoundPage } />
        </Switch>
    )}

export default homeLayoutPage

