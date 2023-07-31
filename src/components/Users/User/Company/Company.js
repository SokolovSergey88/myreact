const Company = ({company}) => {
    const {catchPhrase, bs} = company;
    return (
        <div>
            <p>catchPhrase: {catchPhrase}</p>
            <p>bs: {bs}</p>
        </div>
    );
};

export {Company};