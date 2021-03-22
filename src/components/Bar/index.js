import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
// import { Button } from "../Button"
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import './Bar.css'

class Bar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <Link to= "/">ASST14<i className="fas fa-house-user"></i></Link>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.url}>{item.icon}

                                    
                                    <span>{item.title}</span>
                                </Link>

                            </li>

                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default Bar;
