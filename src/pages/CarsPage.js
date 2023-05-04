import React from 'react';
import {Cars} from "../components/Cars";
import CarsForm from "../components/carsForm/CarsForm";

const CarsPage = () => {
    return (
        <div>
            <CarsForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;