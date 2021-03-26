import React, {useContext} from 'react';
import {Route} from 'react-router-dom';
import {AppContext} from "../components/AppContext";

export const buttonStyle = {
    padding: 15,
    margin: 15,
    backgroundColor: "crimson",
    color: "white",
    border: "none"
}

const AdminPage = () => {
    const { counter, isLogged, toggleIsLogged } = useContext(AppContext)


    const buttonText = isLogged ? "Log out" :"Log in";

    return (
        <div style={{color: "crimson"}}>
            {isLogged ? (<><p>Admin panel - hello world!</p><p>Counter: {counter}</p></>) : <p> You don't have permissions to visit this site</p>}
            <button style={buttonStyle} onClick={toggleIsLogged}> {buttonText} </button>
        </div>
    )
};

export default AdminPage;