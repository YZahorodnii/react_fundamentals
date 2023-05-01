import React from 'react';
import {useForm} from "react-hook-form";
import css from "../Forms.module.css";

const Dogs = ({stateDispatch}) => {
    const {register, reset, handleSubmit} = useForm();

    const [{dogs}, dispatch] = stateDispatch;
    const saveDog = (dog) => {
        console.log(dog);
        dispatch({type: 'ADD_DOG', payload: dog});
    }
    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                Add dog: <input type="text" placeholder={'dog'} {...register('name')}/>
                <button>save</button>
            </form>
            {dogs.map(dog => <div key={dog.id}>{dog.name}{<button onClick={() => dispatch({type: 'DELETE_DOG', payload: dog.id})}>delete</button>}</div>)}
        </div>
    );
};

export default Dogs;