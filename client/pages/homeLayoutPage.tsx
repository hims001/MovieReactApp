import React from "react"
import LandingPage from './landingPage'
import SearchPage from './searchPage'
import { Route, Switch } from 'react-router-dom'
import DetailsPage from "./detailsPage"

const homeLayoutPage = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/index" component={ LandingPage } exact />
            <Route path="/search" component={ SearchPage } />
            <Route path="/details/:id" component={ DetailsPage } />
        </Switch>
    )}

export default homeLayoutPage

