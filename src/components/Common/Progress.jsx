import React, { useEffect, useState } from 'react';

export const Progress = ({ done }) => {

    const [style, setStyle] = useState({});
    
    useEffect(() => {

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${ done }%`
            }
            setStyle(newStyle);
        });

    }, [])

    return(
        <div className="progress">
            <div className="progress-done" style={ style } >
                { done }%
            </div>
        </div>
    )
};