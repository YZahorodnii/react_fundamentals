import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {all} from "axios";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/comment.validator";
import {commentService} from "../../services/comment.service";
import comments from "../Comments/Comments";

const CommentForm = ({setAllComments, commentForUpdate}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({mode:  'all', resolver: joiResolver(commentValidator)})

    useEffect(() => {
        if (commentForUpdate) {
            setValue('name', commentForUpdate.name, {shouldValidate: true})
            setValue('email', commentForUpdate.email, {shouldValidate: true})
            setValue('body', commentForUpdate.body, {shouldValidate: true})
        }
    }, [commentForUpdate])
    let create = async (data) => {
        await commentService.create(data)
        setAllComments(prev => !prev);
        reset();
    }

    let update = async (data) => {
        await commentService.updateById(data.id, data)
        setAllComments(prev => !prev);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(commentForUpdate?update:create)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>{commentForUpdate?'update':'create'}</button>
        </form>
    );
};

export default CommentForm;