import React , {useState} from 'react'
import './SignupForm.css'

import Button from '../../ui/button/Button'

function SignupForm(props) {

       const[firstName  , setFirstName ] = useState('');
       const[lastName  , setLastName ] = useState('');
       const[email  , setEmail ] = useState('');
       const[password , setPassword ] = useState('');

       const firstNameChangeHandler = (event) => {
              setFirstName(event.target.value);
       }
       const lastNameChangeHandler = (event) => {
              setLastName(event.target.value);
       }
       const emailChangeHandler = (event) => {
              setEmail(event.target.value);
       }
       const passwordChangeHandler = (event) => {
              setPassword(event.target.value);
       }

       const submitHandler = (event) =>{
                     event.preventDefault();

                     const signupData = {
                            firstName : firstName, 
                            lastName : lastName,
                            email : email,
                            password : password,
                     }

                     console.log(signupData)

                     setFirstName('')
                     setLastName('')
                     setEmail('')
                     setPassword('')
       } 
              
       return (
              <div className = "signup-form ">
                     <h1>Fill in your details</h1>
                     <form  className = "signup-form__formwrap" onSubmit = {submitHandler}>
                            <div className="signup-form__formwrap--form-group">
                                   <label  id="firstname">Firstname</label>
                                   <input type="text" id ="firstname"  value = {firstName} onChange = {firstNameChangeHandler}/>
                            </div>
                            <div className="signup-form__formwrap--form-group">
                                   <label   id="lastname">Lastname</label>
                                   <input type="text" id ="lastname" value = {lastName} onChange = {lastNameChangeHandler}/>
                            </div>
                            <div className="signup-form__formwrap--form-group">
                                   <label   id="email">Email</label>
                                   <input type="email" id ="email" value = {email} onChange = {emailChangeHandler} />
                            </div>
                            <div className="signup-form__formwrap--form-group">
                                   <label  id="password">password</label>
                                   <input type="password" id ="password"  value = {password} onChange = {passwordChangeHandler}/>
                            </div>

                            {
                                   (window.innerWidth > 960 )  ? 
                                   <Button backgroundColor = '#0692C4' text = 'SIGN UP'  textColor="#fff"   borderColor = '#0692C4'  borderRadius = '4px' extraClassName = 'btn'
                                   extraStyle ={{
                                          height: '60px' , 
                                          width: '558px',
                                          fontSize : '18px',
                                   }}/> :
                                   <Button backgroundColor = '#0692C4' text = 'SIGN UP'  textColor="#fff"   borderColor = '#0692C4'  borderRadius = '4px' extraClassName = 'btn'
                                   extraStyle ={{
                                          height: '40px' , 
                                          width: '400px',
                                          fontSize : '18px',
                                   }}/>
                            }
              
                     </form>
              </div>
       )
}

export default SignupForm
