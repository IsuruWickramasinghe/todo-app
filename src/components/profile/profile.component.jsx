import React, { useEffect, useState } from 'react';
import './profile.style.css';
import { auth } from '../../config/firebase';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const curUser = auth.currentUser;
    setUser(curUser);
  }, []);


  return (
    <div className='profile'>
      <div className='profile-data'>
        {user && (
          <>
            <div className='pro-pic'>
              <img src={user && user.photoURL} alt='' />
            </div>
            <ul>
              <li className='pro-name'>
                <p>User Name: {user && user.displayName}</p>
              </li>
              <li className='pro-email'>
                <p>User Email: {user && user.email}</p>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;

