import React, {Component} from 'react';
import "../styles/Header.css";
import {Route} from "react-router-dom";

class Header extends Component
{
    render() {
        return (
            <>
              <Route path={"/"} render={() => (
                  <img src={"https://picsum.photos/1680/400"} alt={"img"}/>
                  )}
              />
            </>
        );
    }
}

export default Header;