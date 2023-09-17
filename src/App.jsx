
import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'


function App() {

  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')

  }, [])

  console.log(users)


  return (
    <div>
      <h1>Instagram</h1>
      <h4>intento de ingreso a cuenta de instagram actualiza ya!!</h4>
      <FormUser
        createUser={createUser}
      />

    </div>


  )

}

export default App
