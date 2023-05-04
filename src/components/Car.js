import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{brand}</li>
                    <li>{price}</li>
                    <li>{year}</li>
                </ul>
            </div>
        </div>
    );
};

export default Car;