import React from 'react';
import './App.css';
import SignUp from './signup';
import SignIn from './signin';
import Boards from './boards';
import BoardView from './boardView';
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = ({boards,selectedBoard,addBoard}) => {
    return (
      <HashRouter>
        <Switch>
           <Route exact path="/signup" render={() => <SignUp />}/>
           <Route  exact path = "/" component={SignIn}/>
           <Route path="/signin" render={() => <SignIn/>}/>
           <Route exact path="/boards" render={() => <Boards boards={boards} addBoard={addBoard}/>}/>
           <Route exact path="/board_view" render={() => <BoardView boards={boards} selectedBoard={selectedBoard}/>}/>
           <Route render={() => <SignIn />}/>
        </Switch>
     </HashRouter>
    );
}

const mapToProps = ({boards,selectedBoard,addBoard}) => ({boards,selectedBoard,addBoard});
export default connect(mapToProps)(App);