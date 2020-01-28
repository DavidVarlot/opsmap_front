import POI from './../models/poi';
import {ADD_POI, TEST} from './../constants/MapActions';

// on défini le store
export const initialState = {
	poiToEdit : new POI(undefined,undefined,"48.671469","2.3174188,18"),
    pois: new Array<POI>(),
    toastError: null
}

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ADD_POI:
			console.log(ADD_POI + ' ' + action.payload.lat)
			return {
                ...state,
				pois : new Array(...state.pois, action.payload),
				poiToEdit : new POI(undefined,undefined,undefined,undefined),
				
			}
		case TEST:
			return state

		default:
			return state
	}
}