import { types } from '../types/types';

const initialState = {
    loading: false,
    data: [],
    errorMessage:'',
    customersPerPage: 0,
    totalCustomers: 0
}

export const customerListReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case types.customerListLoading:
            return {
                ...state,
                loading: true,
                errorMessage:''
            }
        case types.customerListSuccess:
            return {
                ...state,
                loading: false,
                data: action.payload.currentCustomers,
                customersPerPage: action.payload.customersPerPage,
                totalCustomers: action.payload.totalCustomers,
                errorMessage: ''
            }
        case types.customerListFail:
            return {
                ...state,
                loading: false,
                errorMessage: 'Unable to get Customers'
            }
        
    
        default:
            return state;
    }
}