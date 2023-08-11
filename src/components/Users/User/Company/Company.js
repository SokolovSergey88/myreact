const Company = ({user}) => {
    const {company:{name,catchPhrase,bs}} = user;
    return (
        <div>
            <h3>name: {name}</h3>
            <h3>catchPhrase: {catchPhrase}</h3>
            <h3>bs: {bs}</h3>
        </div>
    );
};

export {Company};