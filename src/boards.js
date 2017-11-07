import React, { Component } from 'react';
import './boards.css';
import {initialState} from './store'
import {users} from './store'
import {NavLink} from 'react-router-dom'
import {Col} from 'react-bootstrap';

const Boards=()=>{ 
    return(                    
        <header className="header">
            <nav>
                <Col sm={1}>
                    <i className="fa fa-columns"></i>
                    <span>Boards</span>
                </Col>
                <Col sm={8}>
                    <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="brandBoard"/>
                </Col>
                <Col sm={2}>
                    <span>Name</span>
                </Col>
                <Col sm={1}>
                    <NavLink to="/signin">Sign Out</NavLink>
                </Col>
            </nav>
        </header>        
        )
    
    }

export  default Boards;