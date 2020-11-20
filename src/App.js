import React from 'react';


import Main from './Main';
import Welcome from './Welcome';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import MainGame from './MainGame'
import PrivateRoute from './PrivateRoute'
import './App.css';
import Aftersignin from './Components/Aftersignin';

require('firebase/auth')


function App() {

 
  return (


<div className="app">

<Router>
<AuthProvider>
 <Switch>
     <Route exact path="/" component={Main}/>
     <Route exact path="/aftersignin" component={MainGame}/>
     
    <Route exact path="/welcome" component={Welcome}/>
  </Switch>
  </AuthProvider>
</Router>


</div>
  );
}

export default App;
