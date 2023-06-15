import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../components/navbar/navbar.component';
import NotSup from '../components/not-sup/not-sup.component';
import { useLocation } from 'react-router-dom'


function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [pathName,setPathName] = useState("")

  const location = useLocation().pathname

  // use effect
  useEffect(() => {
    // check user logged in
    const userStateCheck = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          navigate('/todo-app');
        }
      });
    };
    userStateCheck();

    setPathName(
      location==="/todo-app/home/todo-list" ? "TODO List" :
      location==="/todo-app/home/profile" ? "Profile" :
      location==="/todo-app/home/completed-tasks" ? "Completed Tasks" :
      location==="/todo-app/home/add-new-task" ? "Add New TODO" : ""
    )

  });

  // sign out
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/todo-app');
    } catch (error) {
      console.log(error);
    }
  };

  // display name
  const getFirstName = (displayName) => {
    if (!displayName) {
      return '';
    }
    const firstName = displayName.split(' ')[0];
    return firstName;
  };

  return (
    <div>
      <NotSup />
      <div className='home-page'>
        <div className='header'>
          {user && (
            <div className="user-info">
              <div className="user-name">
                Welcome, {getFirstName(user.displayName) || user.email}
              </div>
            </div>
          )}
          <div className="sign-out-btn">
            <button onClick={handleSignOut}>
              <i className="ri-logout-circle-r-line"></i>
            </button>
          </div>
        </div>
        <div className='comp-title'>{pathName}</div>
        <div className="home-page-content">
          <Outlet/>
        </div>
        <div className="nav-bar">
          <NavBar />
        </div>
      </div>
    </div>
    
  );
}

export default HomePage;
