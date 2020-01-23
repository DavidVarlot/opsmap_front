import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormEditWaypoint from '../containers/FormEditWaypoint';
import OlMap from '../containers/OlMap';
class Home extends Component <any, any> {

    render(){
        return(
            <div>
                <ul>
                    <li><a href="https://openlayers.org/">https://openlayers.org/</a></li>
                </ul>
                <FormEditWaypoint />
                <OlMap />
            </div>
        )
    }
}


export default Home;