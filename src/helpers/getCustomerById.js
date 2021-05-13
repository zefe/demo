import { customers } from '../data/dataCustomerDetails';

export const getCustomerById = (id) => {

    const customer =  customers.find( customer => customer.transpaisId === parseInt(id) )

    return customer;
}