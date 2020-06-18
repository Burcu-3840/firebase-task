import React from 'react';
import Home from './Components/Home';
import Main from './Components/Main';
import Register from './Components/Register';
import Login from './Components/Login';
import {} from './App.css'
import "antd/dist/antd.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthProvider } from './Auth';



const App =()=>  {
  return (

<AuthProvider>

     <Router>
       <div>
         <Route exact path = '/'  component = {Home}/>
         <Route exact path = '/register'  component = {Register}/>
         <Route exact path = '/login'  component = {Login}/>
         <Route exact path = '/main'  component = {Main}/>

       </div>
    </Router>

  </AuthProvider>
  
      )
}

export default App;
