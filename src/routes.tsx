import React, { Component }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
//import EditFilm from './page/Film/EditFilm';
//import Genre from './page/Genre/Genre';

/*****************************************************************
 * 
 * Router de l'application
 * 
**************************************************************** */

export default class Routes extends Component <any, any> {


    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        );
        /*
        return (
            <Router>
                <Route exact path="/" component={Accueil} />
                <Route path="/film/edit/:id" component={EditFilm} />
                <Route path="/film/add" component={EditFilm} />
                <Route path="/genre" component={Genre} />
            </Router>
        )
        */
    }
}