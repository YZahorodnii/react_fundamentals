import React, {FC} from 'react';
import {CarForm} from "../components/CarForm";
import {Cars} from "../components/Cars";
import {useAppSelector} from "../hooks";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage}