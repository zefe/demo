import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../Hooks/useForm';
import searchIcon from '../../assets/icons/Search.svg';

export const Customers = () => {

    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        //history.push(`?q=${searchText}`);
        console.log("Searching...")
    }

    const customerList = [
        {
            id: 1,
            product: "Product",
            type_product: "Type Product",
            retention_score: "hight",
            recommendations: "Recommendations",
            action: "Hold"
        },
        {
            id: 2,
            product: "Product",
            type_product: "Type Product",
            retention_score: "hight",
            recommendations: "Recommendations",
            action: "Hold"
        },
        {
            id: 3,
            product: "Product",
            type_product: "Type Product",
            retention_score: "medium",
            recommendations: "Recommendations",
            action: "Hold"
        },
        {
            id: 4,
            product: "Product",
            type_product: "Type Product",
            retention_score: "hight",
            recommendations: "Recommendations",
            action: "Hold"
        },
        {
            id: 5,
            product: "Product",
            type_product: "Type Product",
            retention_score: "low",
            recommendations: "Recommendations",
            action: "Let go"
        },
        {
            id: 6,
            product: "Product",
            type_product: "Type Product",
            retention_score: "hight",
            recommendations: "Recommendations",
            action: "Hold"
        }
    ]

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
                                        customerList.map( customer => {
                                            return(
                                                <tr key={ customer.id }>
                                                    <td>{ customer.id }</td>
                                                    <td>{ customer.product }</td>
                                                    <td>{ customer.type_product }</td>
                                                    <td>
                                                        <span className={`badge ${customer.retention_score}-outline`}>
                                                            { customer.retention_score }
                                                        </span>
                                                    </td>
                                                    <td>{ customer.recommendations }</td>
                                                    <td>
                                                        <span className={`badge ${customer.retention_score }`}>
                                                            { customer.action}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <Link to={ `/customer/${ customer.id }` } >
                                                            view
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>

                        </div>
                        
                    </div>

                </div>
            </section>
            
        </div>
    )
}
