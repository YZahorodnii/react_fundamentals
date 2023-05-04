import React, {FC} from 'react';
import {ICar} from "../interfaces";
export interface IProps {
    car: ICar
}
const Car: FC<IProps> = ({car}) => {
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