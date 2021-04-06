import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { useForm } from '../../Hooks/useForm';
import searchIcon from '../../assets/icons/Search.svg';
import { getCustomerList } from '../../stateManagement/actions/customerActions';
import { CustomerRow } from './CustomerRow';


export const Customers = () => {

    const dispatch = useDispatch();

    const history = useHistory();
    const location = useLocation();
    const { q='' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const { data: customerList, customersPerPage, totalCustomers, errorMessage } = useSelector(state => state.customerList);
    
    useEffect(() => {
        FetchData(1);
    }, []);

    const FetchData = (currentPage=1) => {
        dispatch( getCustomerList(currentPage) );
    };


    const getCustomerById = (customerId='') => {
        if(customerId === ''){
            return [];
        }

        customerId.toLocaleLowerCase();
        return customerList.filter( customer => customer.retention_score.toLocaleLowerCase().includes( customerId) ||
        customer.id.toString().includes(customerId) );
    };

    const customerFiltered = getCustomerById( searchText.toLocaleLowerCase() );

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    const handleRowClick = (customerId) => {
        history.push(`/customer/${ customerId }`)
    };


    const showData = () => {
 
        if(customerFiltered.length !== 0){

            return  customerFiltered.map( customer => (
                <CustomerRow
                    key={ customer.id }
                    customer={ customer }
                    handleRowClick ={ handleRowClick }
                />
            ));

        }

        if(customerList.length !== 0){

            return  customerList.map( customer => (
                <CustomerRow
                    key={ customer.id }
                    customer={ customer }
                    handleRowClick ={ handleRowClick}
                />
            ));
        }

        if(errorMessage !== "") {
            return <p>{errorMessage}</p>
        }

    };


    return (
        <div>
            <section className="customers">
                <div className="customers-grid">
                    <div className="customers-card">
                        <div className="search-customer">
                            <div className="search-container">
                                <div className="title-customers" >
                                    <h3>Customers</h3>
                                </div>
                                <div className="search-wrapper" >
                                    <form onSubmit={ handleSearch } >
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="search-input"
                                            name="searchText"
                                            value={ searchText }
                                            onChange={ handleInputChange }
                                            autoComplete="off"
                                            required
                                        />
                                        <button className="search-button" >
                                            <img src={searchIcon} alt="imagen" />
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                        
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>PRODUCT</th>
                                        <th>TYPE OF PRODUCT</th>
                                        <th>RETENTION SCORE</th>
                                        <th>RECOMENDATIONS</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        showData()
                                    }
                                    
                                </tbody>
                            </table>

                        </div>
                        
                    </div>

                </div>
                
                <div className="pagination-content">
                    <ReactPaginate 
                        pageCount={ Math.ceil(totalCustomers / customersPerPage)}
                        pageRangeDisplayed={ 2 }
                        marginPagesDisplayed={ 1 }
                        onPageChange={ (data) => FetchData(data.selected + 1)}
                        containerClassName={"pagination"}
                        pageLinkClassName={"pagination-link"}
                        activeClassName={"pagination-active-link"}
                        nextClassName={"pagination-next-link"}
                        previousClassName={"pagination-previous-link"}
                    />


                </div>
            </section>
            
        </div>
    )
}
