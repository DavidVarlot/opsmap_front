import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPoi } from './../actions/actions'
import POI from './../model/poi';


const mapStateToProps = (state:any) => {
    return {
      poi: state.poiToEdit
    }
}


const mapDispatchToProps = (dispatch:any) => {

  }

class FormEditWaypoint extends Component <any, any> {

    addPOI:any;
    
    constructor(props: any) {
        super(props);

        this.addPOI = (event: any) => {
            alert(this.props.poi.lat);
        }
        
    }

    
    

    render(){
        return (
            <div>
                <span><label>Lat</label><input type="text" value={this.props.poi.lat} ></input></span>
                <span><label>Lon</label><input type="text" value={this.props.poi.lon}></input></span>
                <span><button onClick={this.addPOI }>OK</button></span>
            </div>
        );
    }
}

export default connect(mapStateToProps)(FormEditWaypoint)