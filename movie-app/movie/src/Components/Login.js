import React, {useCallback} from 'react'
import { withRouter} from 'react-router';
//import {AuthContext}  from "../Auth.js"
import '../App.css'
import {useForm} from 'react-hook-form'
import app from "../Firebase";

const Login = ({history}) => {

  const {register, handleSubmit, errors} = useForm();

  const handleLogin = useCallback(async event => {
      event.preventDefault();
      const {email, password} = event.target.elements;
    
      try {
        await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/main");
       } catch(error){
         alert(error);
       }
    }, [history]);

 

     
     
     


   const onSubmit=(data)=> {
     console.log(data)
    }


    return (   
      <div className='container'>
           
         <form className='login-form' onSubmit ={handleSubmit(onSubmit)} noValidate >
          <form onSubmit = {handleLogin}>
         
            <input
            className = 'inp-input'
              ref= {register({required:"EMAIL REQUIRED"})}
              type = "text"
              name =  "email"
              placeholder = "Please write your email"
            />
             {errors.email && <p className= "inpt-errors">{errors.email.message}</p>}
            
            <input
            className = 'inp-input'
              ref = {register({required: "PASSWORD REQUIRED"})}
              type = "password"
              name =  "password"
              placeholder = "Please write your password"
            /> 

            {errors.password && <p className= "inpt-errors">{errors.password.message} </p>}


            <button
             className = "rgstr-login-button"
             type = 'submit'
             name = 'login'
             > LOGIN </button>






  
             </form>
         </form>
         </div>
       
    )
}

export default withRouter(Login)