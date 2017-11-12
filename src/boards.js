import React from 'react';
import { NavLink} from 'react-router-dom';
import {setView,setAddBoardTrue,setAddBoardFalse,addNewBoard} from './actions';
import {Col} from 'react-bootstrap';
import { connect } from "redux-zero/react";
import { users } from './store';
import './boards.css'

const NavBoards = ({users}) => {
        return(                
         <header className="navBoard">
                 <nav>                     
                     <Col sm={8}>
                         <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" width="110px" height="35px"/>
                     </Col>
                     <Col sm={2}>
                         <span>{users[0].firstName}</span>
                     </Col>
                     <Col sm={1}>
                         <NavLink to="/signin">Sign Out</NavLink>
                     </Col>
                 </nav>
        </header>        
     )
}

const Board=({board,index})=>{
    return <div key={index} className="board-wrap col-md-3">
            <NavLink className="nostyle" onClick={()=>{setView(index)}} to="/board_view/">
                <div className="board">
                <p>{board.name}</p>
                </div>
            </NavLink>
           </div>
}
const Boards =(props)=>{
    let boards = props.boards;
    let addBoard = props.addBoard;
    let newBoard='';
    return (
            <div>
               <NavBoards users={users}/>
                <div className="container-fluid">
                    <div className="boards">
                        {
                            boards.map((item,index)=>{
                                return <Board key={index} board={item} index={index}/>
                            })
                        }
                        <div className="board-wrap col-md-3">
                            {
                                addBoard === true &&
                                <div className="addBoard board-wrap">
                                    <b><p className="p-margin">New board</p></b>
                                    <input placeholder="Board name" className="form-control card size-input" onChange={(e)=>{newBoard=e.currentTarget.value}}/>
                                    <button className="btn-add" onClick={()=>{addNewBoard(newBoard)}}>Create board</button> or <button className="btn-link-cancel" onClick={()=>{setAddBoardFalse()}} >Cancel</button>
                                </div>
                            }
                            {
                                addBoard === false &&
                                <button className="btn-new-board board" onClick={()=>{setAddBoardTrue()}}><center>Add new board</center></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Boards;
