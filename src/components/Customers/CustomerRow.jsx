import React from 'react';

export const CustomerRow = ( props ) => {
    
    const { customer, handleRowClick } = props;

    return (
        <>
            <tr key={ customer.transpaisId } onClick={() => handleRowClick(customer.transpaisId)} >
                <td>00{ customer.transpaisId }</td>
                <td>{customer.nombre}</td>
                <td>{customer.correo}</td>
                <td>
                    <span >
                        {customer.puntosDeLealtad}
                    </span>
                </td>
                <td>{ customer.telefono}</td>
                <td>{ customer.perfil }</td>
            </tr>
            
        </>
    )
}
