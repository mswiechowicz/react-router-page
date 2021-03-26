import React, {useState} from 'react';
import {buttonStyle} from "../pages/AdminPage";
import {useDispatch} from "react-redux";

import {addRate, editRate} from "../redux/actions/appActions";


const RateForm = ({author = '', rate = 0, comment = '', id, callback}) => {
    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);

    const dispatch = useDispatch();

    const handleAuthorChange = e => setAuthorInput(e.target.value);
    const handleRateChange = e => setRateInput(e.target.value);
    const handleCommentChange = e => setCommentInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if(authorInput.length === 0) {
            return 0;
        }
        const rateObject = {
            author: authorInput,
            rate: Number(rateInput),
            comment: commentInput,
            id,
        }
        id ? dispatch(editRate(rateObject)) : dispatch(addRate(rateObject));

        if (id) {
            callback();
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>
                    <label>
                        Author: <input type="text" onChange={handleAuthorChange} value={authorInput}/>
                    </label>
                </p>
                <p>
                    <label>
                        Rate: <input type="number" onChange={handleRateChange} value={rateInput}/>
                    </label>
                </p>
                <p>
                    <label>
                        Comment: <input type="text" onChange={handleCommentChange} value={commentInput}/>
                    </label>
                </p>
                <button style={buttonStyle} type="submit">
                    {id ? "Edit rate" : "Add rate"}
                </button>
            </div>
    </form>
    );
}

export default RateForm;