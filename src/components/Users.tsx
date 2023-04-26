import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../interfaces/user.interface";
import {userService} from "../services/user.service";
import {urls} from "../constants/urls";
import {User} from "./User";
interface IProps {

}
const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect( () => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    })
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};