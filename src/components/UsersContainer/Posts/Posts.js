import {useEffect, useState} from "react";
import {Post} from "./Post/Post";

const Posts = ({userId, userName}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(posts=> setPosts(posts))
    },[userId])
    return (
        <div>
            <h1>{userName}</h1>
            {posts.map(post=> <Post key={post.id} post={post} userName={userName}/>)}
        </div>
    );
};

export {Posts};