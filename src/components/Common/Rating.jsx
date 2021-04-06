import React, { useState } from 'react';
import { Star } from './Star';


export const Rating = () => {
    
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

    return (
        <>
            {stars.map((star, i) => (
                <Star
                    key={i}
                    starId={i}
                    rating={hoverRating || rating}
                    onMouseEnter={() => setHoverRating(i)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(i)}
                />
                ))
            }
        </>
    )
}
