import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
    {name: "start", path: "/", exact: true},
    {name: "products", path: "/products"},
    {name: "contact", path: "/contact"},
    {name: "admin panel", path: "/admin"},
]

class Navigation extends Component
{
    menu = list.map( (item, index) => (
        <li key={index}>
            <NavLink to={item.path} exact={item.exact || false}>{item.name}</NavLink>
        </li>
    ));
    render() {
        return (
            <nav className={"nav"}>
               <ul>
                   {this.menu}
               </ul>
            </nav>
        );
    }
}

export default Navigation;