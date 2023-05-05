import React from 'react';

const Car = (car) => {
    const {id, brand, price, year} = car;
    console.log(car.brand);
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{brand}</li>
                <li>{price}</li>
                <li>{year}</li>
            </ul>
        </div>
    );
};

export default Car;