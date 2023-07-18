import {useState} from "react";

const MyCheckbox = () => {
    const [liked, setLiked] = useState(true);

    const handleChange = (e) =>{
        setLiked(e.target.checked)
    }


    return (
        <div>
            <label>
            <input
                type="checkbox"
                checked={liked}
                onChange={handleChange}
            />
                I liked this
            </label>
            <p>You {liked ? 'liked' : 'did not like'} this</p>
        </div>
    );
};

export {MyCheckbox};