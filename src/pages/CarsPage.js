import React from 'react';
import {Cars} from "../components";
import {CarsForm} from "../components";
import {useSelector} from "react-redux";

const CarsPage = () => {
     const {error, loading} = useSelector(state => state.cars)
    return (
        <div>
            <CarsForm/>
            {error&&<h1>{JSON.stringify(error)}</h1>}
            {loading&&<h1>Loading...</h1>}
            <Cars/>
        </div>
    );
};

export {CarsPage};