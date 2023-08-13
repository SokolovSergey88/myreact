import {useForm} from "react-hook-form";

const PostsForm = ({setPosts}) => {
    const {register, handleSubmit, reset} = useForm();

    const submitPost = (comments) => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(comments)
        }).then(value => value.json())
            .then(value => {
                setPosts(prev=>[...prev, value])
                reset()
            })
    };

    return (
        <form onSubmit={handleSubmit(submitPost)}>
            <label>postId<input {...register('postId')} placeholder={'postId'} type="text"/></label>
            <label>id<input {...register('id')} placeholder={'id'} type="text"/></label>
            <label>name<input {...register('name')} placeholder={'name'} type="text"/></label>
            <label>email<input {...register('email')} placeholder={'email'} type="text"/></label>
            <label>body<input {...register('body')} placeholder={'body'} type="text"/></label>
            <button>Submit</button>
        </form>
    );
};

export {PostsForm};