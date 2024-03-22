import React from 'react'
import './CSS/LoginSignup.css'

const LoginSingup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SIgn Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <button>Continue</button>
        
<p className="loginsignup-login">Already have an account? <span>Login here</span></p>
<div className="loginsignup-agree">
  <input type='checkbox'></input>
  <p>By continuing, I agree the terms use and Privacy policy.</p>
</div>
      </div>
        
    </div>
  )
}

export default LoginSingup