import React from 'react';
import {setTrueAddBoard ,addBoardList,setTrueAddTask ,addList,setAddBoardFalse,setAddListFalse} from './actions';

const List =({board,index,selected})=>{
    let newCard ="";
    return (
        <div key={index} className="list">
            <p className="p-margin">{board.name}</p>
            {
                board.cards.map((item,i)=>{
                    return <div key={i} className="card">
                              <p className="white-sp">{item}</p>
                           </div>
                })
            }
            {
                board.add===true && 
                <div>
                    <textarea className="form-control newcard" onChange={(e)=>newCard=e.currentTarget.value}/>
                    <div>
                        <button className="btn-add" onClick={()=>{addBoardList(selected,index,newCard)}}>Add</button> or <button className="btn-link-cancel" onClick={()=>{setAddBoardFalse(selected,index)}}>Cancel</button>
                    </div>
                </div>

            }
            {
                board.add===false && 
                <button className="btn-link" onClick={()=>{setTrueAddBoard (selected,index)}}>
                    Add a new card
                </button>
            }
            
        </div>
    );
}
const BoardView=({boards,selectedBoard})=>{
    let newList='';
    return <div>
                <header className="trello-head"><img alt="logo" src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" width="110px" height="35px"/></header>
                <div className="col-md-12 board-view">
                    <h3>{boards[selectedBoard].name}</h3>
                    {
                        boards[selectedBoard].lists.map((item,index)=>{
                            return <List key={index} board={item} index={index} selected={selectedBoard}/>
                        })
                    }
                    <div className="new-list margin-right">
                        {
                            boards[selectedBoard].add === false &&
                            <button className="btn-new-list" onClick={()=>{setTrueAddTask (selectedBoard)}}>Add new list...</button>
                        }
                        {
                            boards[selectedBoard].add === true &&
                            <div className="list">
                                <input placeholder="Add a new list" className="form-control card size-input" onChange={(e)=>{newList=e.currentTarget.value}}/>
                                <button className="btn-add" onClick={()=>{addList(selectedBoard,newList)}}>Save list</button> or <button className="btn-link-cancel" onClick={()=>{setAddListFalse(selectedBoard)}} >Cancel</button>
                            </div>
                        }
                    </div>
                </div>
           </div>
}

export default BoardView;