const Post = ({post, userName}) => {
    const {title, body, id} = post;

    return (
        <div>
            <h3>id: {id}</h3>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export {Post};