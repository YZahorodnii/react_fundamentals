import React, {useReducer} from 'react';
import Cats from "../components/Cats/Cats";
import Dogs from "../components/Dogs/Dogs";
import css from "../../src/components/Forms.module.css"

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return {...state, cats: [...state.cats, cat]};
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.splice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return {...state, dogs: [...state.dogs, dog]};
        case 'DELETE_CAT':
            const catIdForDelete = action.payload;
            const catIndex = state.cats.findIndex(value => value.id === catIdForDelete);
            state.cats.splice(catIndex, 1);
            return {...state}
        case 'DELETE_DOG':
            const dogIdForDelete = action.payload;
            const dogIndex = state.dogs.findIndex(value => value.id === dogIdForDelete);
            state.dogs.splice(dogIndex, 1);
            return {...state};
        default:
            return state;
    }
}
const CatDogPage = () => {
    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div className={css.Forms}>
            <Cats stateDispatch={stateDispatch}/>
            <Dogs stateDispatch={stateDispatch}/>
        </div>
    );
};

export default CatDogPage;