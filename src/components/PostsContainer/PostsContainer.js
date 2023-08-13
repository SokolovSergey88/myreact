import {Posts} from "./Posts/Posts";
import {useState} from "react";
import {PostsForm} from "./PostsForm/PostsForm";

const PostsContainer = () => {
    const [posts, setPosts] = useState([]);
    return (
        <div>
            <PostsForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts} setPosts={setPosts}/>
        </div>
    );
};

export {PostsContainer};