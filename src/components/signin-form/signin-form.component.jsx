import React from 'react';
import { auth } from '../../config/firebase';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

function SigninForm() {

  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-form">
      <div className="signin-form-btn">
        <button onClick={signIn}>
          <i className="ri-google-fill"></i>
          GOOGLE
        </button>
      </div>
    </div>
  );
}

export default SigninForm;
