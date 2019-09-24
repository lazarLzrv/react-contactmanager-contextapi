import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
class Header extends Component { 
    state = {} 

    render() { 
        const {branding='My App'} = this.props;

        return (
            <nav className="navbar-expand-sm navbar navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">{branding}</NavLink>
                    <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                              
                            <NavLink to="/" className="nav-link">
                                <i className="fa fa-home"></i> Home
                            </NavLink>
                        </li> 
                        <li className="nav-item"> 
                            <NavLink to="/addContact" className="nav-link"> 
                                <i className="fa fa-plus"></i> Add New Contact
                            </NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                <i className="fa fa-question"></i> About us
                            </NavLink>
                        </li> 
                    </ul>
                    </div>
                    
                </div>
            </nav>
           
         );
    }
}
 
export default Header; 