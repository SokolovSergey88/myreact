import {useState} from "react";
import {PostDetails} from "./PostDetails/PostDetails";

const Post = ({post}) => {
    const [isShow, setIsShow] = useState(false);
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => setIsShow(prev=> !prev)}>{isShow ? 'Hide' : 'Show'}</button>
            {
                isShow && <PostDetails post={post}/>
            }
        </div>

    );
};

export {Post};