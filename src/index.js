import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
// import {dishes} from './dishes'
import {HashRouter, Switch, Route} from 'react-router-dom'
import App from './App';
import Signin from './signin'
import Signup from './signup'
import Boards from './boards'

const Index = () => (
   <Provider store={store}>
      <HashRouter>
      {/* <Carousel dishes={dishes} /> */}
         <Switch>
            <Route  exact path = "/" component={Signin}/>
            {/*<Route  exact path = "/signin" component={Boards}/> */}
            <Route exact path ="/signin" component={Signin}/>
            <Route exact path ="/boards" component={Boards}/>
            <Route exact path ="/signup" component={Signup}/>
         </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();