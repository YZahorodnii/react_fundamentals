import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentsService} from "../services";
import {commentsAction} from "../redux/slices";
import Comment from "./Comment";
import {useForm} from "react-hook-form";

const Comments = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);
    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => dispatch(commentsAction.getComments(value)))
    }, [dispatch])
    const {register, reset, handleSubmit} = useForm();

    const save = async (comment) => {
        const {data} = await commentsService.create(comment);
        dispatch(commentsAction.createComments(data));
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>save</button>
            </form>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};