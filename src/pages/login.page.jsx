import React from 'react'
import SigninForm from '../components/signin-form/signin-form.component'
import NotSup from '../components/not-sup/not-sup.component'

function LoginPage() {
  return (
    <div>
      <NotSup />
      <div className='login-page'>
        <div className="login-page-header">
          TODO APP
        </div>
        <div className="login-page-form">
          <SigninForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
