import { types } from '../types/types';
import { customerList } from '../../helpers/dataCustomers';

export const getCustomerList = ( currentPage ) => {
    return async(dispatch) => {
        try {

            dispatch({
                type: types.customerListLoading
            });

            const customersPerPage = 10;
            const totalCustomers = customerList.length;

            const indexOfLastCustomer = currentPage * customersPerPage;
            const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
            const currentCustomers = customerList.slice(indexOfFirstCustomer, indexOfLastCustomer);
            
            dispatch({
                type: types.customerListSuccess,
                payload: {currentCustomers, customersPerPage, totalCustomers}
            })

            
        } catch (e) {
            
            dispatch({
                type: types.customerListFail
            });

            console.log(e)
        }
    }
}