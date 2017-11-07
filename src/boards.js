import React, { Component } from 'react';
import './boards.css';
// import './signin.css';
import {NavLink} from 'react-router-dom'

class Boards extends Component{ 
    render(){ 
        return(
            
            <header class="main-header">
            <nav id="boards_nav" >
                <ul ><li>
                <a href="#" ><i class="fa fa-columns" ></i>
                <span > Boards</span></a></li></ul>
            </nav>
            <a href="/" >
            <span class="logo" ></span>              
            </a>
            <nav class="right" data-reactid=".0.0.0.2">
                <ul >
                 <li><a class="current-user" >
            <img alt="Gravatar for john@phoenix-trello.com" src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" srcset="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" class="react-gravatar react-gravatar" data-reactid=".0.0.0.2.0.0.0.0"/>
            <span > </span>
            <span >John Doe</span>
            </a></li><li ><a href="#" >
            <i class="fa fa-sign-out" ></i>
        <span> Sign out</span></a></li>
        </ul></nav>
        </header>
    
        )
    }
    }

export  default Boards;