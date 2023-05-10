import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Character} from "./Character";
import {charactersService} from "../services";
import {charactersActions} from "../redux/slices";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    useEffect(() => {
        charactersService.getAll().then(value => value.data).then(value => dispatch(charactersActions.setCharacters(value)))
    }, [])
    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};