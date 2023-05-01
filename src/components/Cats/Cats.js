import React from 'react';
import {useForm} from "react-hook-form";
import css from "../Forms.module.css"

const Cats = ({stateDispatch}) => {
    const {register, reset, handleSubmit} = useForm();
    const [{cats}, dispatch] = stateDispatch;
    const saveCat = (cat) => {
        console.log(cat);
        dispatch({type: 'ADD_CAT', payload: cat})
        reset()
    }

    const deleteCat = (cat) => {
        dispatch({type: 'DELETE_CAT', payload: cat.id})
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                Add cat: <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>save</button>
            </form>
            {cats.map(cat => <div key={cat.id}>{cat.name}<button onClick={() => deleteCat(cat)}>delete</button></div>)}
        </div>
    );
};

export default Cats;