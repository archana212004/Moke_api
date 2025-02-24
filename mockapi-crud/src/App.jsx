import React from 'react'
import { useState } from 'react'
import './App.css'
import UsersList from './UserLists'
import { Router,Routes, Route, BrowserRouter } from 'react-router-dom'
import AddUser from './AddUser'
import EditUser from './EditUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<UsersList />}></Route>
        <Route path='/adduser' element={<AddUser />}></Route>
        <Route path='/edituser/:id' element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  </>
  )
}

export default App;
