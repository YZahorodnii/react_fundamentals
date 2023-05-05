import React from 'react';
import {Cars} from "../components";
import CarsForm from "../components/CarsForm";

const CarsPage = () => {
    return (
        <div>
            <CarsForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;