import React, {Component} from 'react';
import "../styles/Header.css";
import {Route, Switch} from "react-router-dom";

class Header extends Component
{
    render() {
        return (
            <>
                <Switch>
                    <Route path={"/"} exact render={() => <img src={"https://picsum.photos/1000/200"} alt={"img"}/> } />
                    <Route path={"/products"} render={() => <img src={"https://picsum.photos/1001/200"} alt={"img"}/> } />
                    <Route path={"/contact"} render={() => <img src={"https://picsum.photos/1002/200"} alt={"img"}/> } />
                    <Route path={"/admin"} render={() => <img src={"https://picsum.photos/1003/200"} alt={"img"}/> } />
                    <Route render={() => <img src={"https://picsum.photos/1280/300"} alt={"img"}/> } />
                </Switch>
            </>
        );
    }
}

export default Header;