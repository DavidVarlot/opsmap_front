import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from './../actions/actions'
import POI from './../models/poi';
import { TEST } from '../constants/MapActions';



const mapStateToProps = (state:any) => {
    return {
      poi: state.poiToEdit
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        test: () => {
            dispatch(actions.test())
        },
        addPOI: (aPoi:POI) => {
            dispatch(actions.addPoi(aPoi))
        }
    };
}

class FormEditWaypoint extends Component <any, any> {

    addPOI:any;
    handleChangeLat: any;
    handleChangeLon : any;
    
    constructor(props: any) {
        super(props);

        this.state = {
            lat: this.props.poi.lat,
            lon: this.props.poi.lon
          };

        this.addPOI = (event: any) => {
            this.props.addPOI(new POI(undefined, undefined, this.state.lat, this.state.lon));
        }

        this.handleChangeLat = (event: any) => {
            this.setState({lat: event.target.value});
        }

        this.handleChangeLon = (event: any) => {
            this.setState({lon: event.target.value});
        }
        
    }

    render(){
        return (
            <div>
                <span><label>Lat</label><input type="text" value={this.state.lat} onChange={this.handleChangeLat}></input></span>
                <span><label>Lon</label><input type="text" value={this.state.lon} onChange={this.handleChangeLon}></input></span>
                <span><button onClick={this.addPOI }>OK</button></span>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormEditWaypoint)