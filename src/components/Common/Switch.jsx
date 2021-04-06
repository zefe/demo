import React from 'react';

export const Switch = ({ onChange }) => {

    return(
        <label className="switch">
            <input type="checkbox" onChange={ onChange } />
            <span />
        </label>
    )
}