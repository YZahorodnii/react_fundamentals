import React, {FC, ReactElement} from 'react';
import {Navigate} from "react-router-dom";
import {authService} from "../services";

interface IProps {
    children: ReactElement
}
const RequiredAuth:FC<IProps> = ({children}) => {
    const accessToken = authService.getAccessToken();

    if (!accessToken) {
        return <Navigate to={'/login'}/>
    }

    return children
};

export {RequiredAuth};

// const RequiredAuth: FC<IProps> = ({children}) => {
//     const {me} = useAppSelector(state => state.authReducer);
//
//     if (!me) {
//         return <Navigate to={'/login'}/>
//     }
//
//     return children
// };
//
// export {RequiredAuth};