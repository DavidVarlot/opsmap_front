

// import Film from './../../model/Film';
import POI from './../model/poi';
import * as mapActions from './../constants/MapActions';

import {ADD_POI} from './../constants/MapActions';

// on défini le store
export const initialState = {
	poiToEdit : new POI(),
    poes: new Array<any>(),
    toastError: null
}

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ADD_POI:
			return {
                ...state,
                poes : new Array(...state.poes, action.payload)
            }
		default:
			return state
	}
}