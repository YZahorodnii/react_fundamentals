import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";

const reducer = (state, action) => {
    return {...state}
}


const CatsForm = () => {
    const {register, setValue, formState: {isValid, errors}, handleSubmit, reset} = useForm();

    const [state, dispatch] = useReducer();

    const save = async (cat) => {
        // let {data} = await ...
        console.log(cat);
        reset();
    }

    const saveDogs = async (dog) => {
        // let {data} = await ...
        console.log(dog);
        reset();
    }
    return (
        <div className={'container'}>
            {state}
            <form onSubmit={handleSubmit(save)}>
                Add cat:<input type="text" placeholder={'cat name'} {...register('cat')}/>
                <button onClick={() => dispatch({})}>save</button>
            </form>

            <form onSubmit={handleSubmit(saveDogs)}>
                Add Dog:<input type="text" placeholder={'dog name'} {...register('dog')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default CatsForm;