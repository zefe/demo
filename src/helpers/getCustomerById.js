import { customers } from '../data/dataCustomerDetails';

export const getCustomerById = (id) => {

    const customer =  customers.find( customer => customer.id === parseInt(id) )

    return customer;
}