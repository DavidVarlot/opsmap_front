
import 'ol/ol.css';
import './styles/OlMap.css';
import React, { Component } from 'react';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { connect } from 'react-redux';
import POI from './../models/poi'

const mapStateToProps = (state:any) => {
  return {
    pois: state.pois
  }
}

class OlMap extends Component <any, any>
{
    private _olmap: any;

    constructor(props: any) {
        super(props);
        this.state = { center: [0, 0], zoom: 1 };
        this._olmap = new Map({
            target: undefined,
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ],
            view: new View({
              center: [0, 0],
              zoom: 0
            })
        });
      }

    componentDidMount() {
        this._olmap.setTarget("map");
    }

    render() {
               
        return (
            <div>
            <h2>OlMap</h2>
            <p>{this.props.pois.map((x:POI) => x.lat)}
            </p>
            <div style={{ width: "100%", height: "700px" }} id="map">
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(OlMap);