import React from 'react';

export const CustomerRow = ( props ) => {
    
    const { customer, handleRowClick } = props;

    return (
        <>
            <tr key={ customer.id } onClick={() => handleRowClick(customer.id)} >
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
            </tr>
            
        </>
    )
}
