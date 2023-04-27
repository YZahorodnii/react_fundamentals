import React from 'react';
import {useForm} from "react-hook-form";

const DogsForm = () => {
    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm();
    const save = (dog) => {
        console.log(dog);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            Add Dog:<input type="text" placeholder={'dog name'} {...register('dog')}/>
            <button>save</button>
        </form>
    );
};

export default DogsForm;