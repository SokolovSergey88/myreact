const Post = ({post}) => {
    const {postId, id, name, email, body} = post;
    return (
        <div>
            <h3>postId: {postId}</h3>
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <h3>email: {email}</h3>
            <h3>body: {body}</h3>
            <hr/>
        </div>
    );
};

export {Post};