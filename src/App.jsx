import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const handleAddUser = (username, age) => {
    setUsersList((prev) => {
      return [...prev,{name:username, age: age, id: Math.random().toString()}]
    })
  }

  return (
    <>
    <AddUser onAddUser={handleAddUser} />
    <UsersList users={usersList} />
    </>
  )
}

export default App
