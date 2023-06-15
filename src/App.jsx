import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Rouer,Routes, Route, Navigate } from 'react-router-dom'
import { auth } from './config/firebase'

import LoginPage from './pages/login.page'
import HomePage from './pages/home.page'
import TodoList from './components/todo-list/todo-list.component'
import Profile from './components/profile/profile.component'
import AddNewTask from './components/add-new/add-new.component'
import CompletedTasks from './components/completed/completed.component'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user)
    })
  },[])

  return (
      <Rouer>
        <Routes>
          <Route path='todo-app/' element={isLoggedIn ? <Navigate to="/todo-app/home/todo-list" /> : <LoginPage />} exact />

          <Route path='/todo-app/home' element={<HomePage />} >

            <Route path='todo-list' element={<TodoList />} />
            <Route path='profile' element={<Profile />} />
            <Route path='completed-tasks' element={<CompletedTasks />} />
            <Route path='add-new-task' element={<AddNewTask />} />

          </Route>

        </Routes>
      </Rouer>
  )
}

export default App
