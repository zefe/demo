import React from 'react';

export const CustomerRow = ( props ) => {
    
    const { customer, handleRowClick } = props;

    return (
        <>
            <tr key={ customer.id } onClick={() => handleRowClick(customer.id)} >
                <td>{ customer.id }</td>
                <td>{ customer.producName }</td>
                <td>{ customer.productType }</td>
                <td>
                    <span className={`badge ${customer.retentionScore}-outline`}>
                        { customer.retentionScore }
                    </span>
                </td>
                <td>{ customer.recomendations }</td>
                <td>
                    <span className={`badge ${customer.retentionScore }`}>
                        { customer.actions}
                    </span>
                </td>
            </tr>
            
        </>
    )
}
