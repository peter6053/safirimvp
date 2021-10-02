import React from 'react'
import SignupForm from '../../components/signup/SignupForm'
import SignupHeader from '../../components/signup/SignupHeader'
import SignUpStyle from './SignUpStyle'

function SignUp() {
       return (
              <SignUpStyle>
                     <SignupHeader/>
                     <SignupForm/>
              </SignUpStyle>
       )
}

export default SignUp
