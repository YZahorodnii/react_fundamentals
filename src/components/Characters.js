import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Character} from "./Character";
import {charactersService} from "../services";
import {charactersActions} from "../redux/slices";
import {useSearchParams} from "react-router-dom";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const [query, ] = useSearchParams({page: '1'});
    useEffect(() => {

    })

    useEffect(() => {
        charactersService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(charactersActions.setCharacters(value)))
    }, [query])
    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};