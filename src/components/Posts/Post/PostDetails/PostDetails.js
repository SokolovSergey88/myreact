const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <ul>
                <li>userId: {userId}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>body: {body}</li>
            </ul>
        </div>
    );
};

export {PostDetails};