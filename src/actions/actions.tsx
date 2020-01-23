import * as mapActions from './../constants/MapActions';

export const addPoi = (lat : string, long : string) => ({
    type : mapActions.ADD_POI,
    lat,
    long
})