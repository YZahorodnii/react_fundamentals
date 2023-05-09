import React, {FC} from 'react';
import {CarForm} from "../components/CarForm";
import {Cars} from "../components/Cars";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage}