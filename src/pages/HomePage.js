import React, {useContext, useReducer, useRef, useState} from 'react';
import {AppContext} from "../components/AppContext";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state.concat(action.text);
        case 'REMOVE':
            return state.filter(el=> state.indexOf(el) !== action.id);
        default:
            throw new Error('Oops something went wrong!')
    }
}

const HomePage = () => {
    const { counter, isLogged, changeCounterValue } = useContext(AppContext)
    const [inputText, setInputText] = useState('');
    const changeInputText = e => {setInputText(e.target.value)};

    const [ state, dispatch ] = useReducer(reducer, ['witam']);
    const buttonStyle = {
        padding: 15,
        backgroundColor: "crimson",
        color: "white",
        border: "none"
    }

    const showElements = state.map((el,index) => (
        <p key={index}>{el}
            <button onClick={() => dispatch({id: index, type: 'REMOVE'})}>delete</button>
        </p>));

    return (
        <div>
            {isLogged ? (<>Counter: {counter} <br/><button style={buttonStyle} onClick={changeCounterValue}> +1 </button> </>) : "Homepage" }
            <section>
                <input type="text" value={inputText} onChange={changeInputText}/>
                <button onClick={() => {
                    dispatch({text: inputText, type: 'ADD'});
                    setInputText('');
                }}> Add text</button>
                {showElements}
            </section>
        </div>
    )
}
export default HomePage;