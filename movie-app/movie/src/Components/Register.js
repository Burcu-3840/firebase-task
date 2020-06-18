import React, {useCallback} from 'react'
import {useForm} from 'react-hook-form';
import { withRouter }  from "react-router";
import app from "../Firebase";
import '../App.css'
const Register = ({ history}) => {

   const {register, handleSubmit, errors} = useForm();

   const handleRegister = useCallback(async event => {
       event.preventDefault();
       const {email, password} = event.target.elements;
       try {
          await app
         .auth()
         .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/main");
       }  catch (error) {
          alert(error);
       }
   }, [history]); 

 
   
  const onSubmit= (data) => {
      console.log(data)
   }    

     return (
     <div className = 'container'>


   <form className='form'  onSubmit= { handleSubmit(onSubmit)}  noValidate>
    <form onSubmit = {handleRegister}>
               

   <input 
      className = 'inp-input'
      ref = {register({required : "FIRSTNAME IS REQUIRED "})}
      name = "firstName"
      type = "text"
      placeholder = "Firstname"
   />

     {errors.firstName && <p className= "inpt-errors">{errors.firstName.message}</p>}
   
   <input 
   className = 'inp-input'
      ref = {register({required : "LASTNAME IS REQUIRED "}) }
      name = "lastName"
      type = "text"
      placeholder = "Lastname"
            
   />


    {errors.lastName && <p className= "inpt-errors">{errors.lastName.message}</p>}
   
   <input 
   className = 'inp-input'
      ref = {register({required : "EMAIL IS REQUIRED"}) }
      name = "email"
      type = "email"
      placeholder = "email"
            
   />

    {errors.email && <p className= "inpt-errors">{errors.email.message}</p>}
   
     <input 
     className = 'inp-input'
      ref = {register({required : "PASSWORD IS REQUIRED"}) }
      name = "password"
      type = "password"
      placeholder = "Password"
      
          
   />

     {errors.password && <p className= "inpt-errors">{errors.password.message}</p>}




    <button 
    className = "rgstr-login-button"
    type = "submit"
    name = "register"
     > Register </button>
   
    


         </form>
       </form>

</div>
     );

     
}

export default withRouter(Register);
