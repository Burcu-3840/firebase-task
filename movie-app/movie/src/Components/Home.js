import React from 'react';


const Home = (props) => {
    return (

        
    
    
      <div className = 'container' >
         
        <form className = "home-form">
        <h1 className = "home-h1">WELCOME TO MOVIE APP</h1> 
          <button 
          className = "home-button"
          type="submit"
          onClick={e => {props.history.push('/register')}}
          > REGISTER 
          </button>
          <button 
          className = "home-button"
          type="submit"
          onClick={e => {props.history.push('/login')}}
          > LOGIN </button>
        
        
        
        </form>


     </div>
    
    )
}

export default Home
