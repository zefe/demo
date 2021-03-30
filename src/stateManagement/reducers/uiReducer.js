import { types } from '../types/types';

const initialState = {
    toggleOpen: false
}

export const uiReducer = ( state=initialState, action) => {

    switch (action.type) {

        case types.uiOpenToggle:
            return {
                ...state,
                toggleOpen: true,
            }
        
        case types.uiCloseToggle:
            return {
                ...state,
                toggleOpen: false
            }

    
        default:
            return state;
    }
}