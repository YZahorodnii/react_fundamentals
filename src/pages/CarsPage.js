import React from 'react';
import {Cars} from "../components";
import {CarsForm} from "../components";

const CarsPage = () => {
    return (
        <div>
            <CarsForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};