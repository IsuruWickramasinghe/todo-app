import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <NavLink className="nav-link" to="todo-list">
        <i className="ri-list-check"></i>
      </NavLink>
      <NavLink className="nav-link" to="profile">
        <i className="ri-user-3-line"></i>
      </NavLink>
      <NavLink className="nav-link" to="completed-tasks">
        <i className="ri-check-double-line"></i>
      </NavLink>
      <NavLink className="nav-link" to="add-new-task">
        <i className="ri-add-line"></i>
      </NavLink>
    </>
  )
}

export default NavBar