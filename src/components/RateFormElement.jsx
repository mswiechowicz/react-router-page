import React, {useState} from 'react';
import RateForm from "./RateForm";

const RateFormElement = ({author, rate, comment, id}) => {
    const [isVisibleForm, setIsVisibleForm] = useState(false);

    const toggleElements = () => setIsVisibleForm(prevValue => !prevValue);

    const formOrButtonElement = isVisibleForm
        ? (<RateForm callback={toggleElements} author={author} rate={rate} comment={comment} id={id}/>)
        : <button onClick={toggleElements}>Edytuj książkę</button>
    return (
        <li>
            <p>Author: {author}</p>
            <p>Rate: {rate}</p>
            <p>Comment: {comment}</p>
            {formOrButtonElement}
        </li>
    );
}

export default RateFormElement;