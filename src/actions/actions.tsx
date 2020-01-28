import * as mapActions from './../constants/MapActions';
import POI from './../models/poi'

export const addPoi = (aPoi : POI) => ({
    type : mapActions.ADD_POI,
    payload : aPoi
})

export const test = () => ({
    type : mapActions.TEST,
})