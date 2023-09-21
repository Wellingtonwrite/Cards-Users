
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'



function App() {

    const [infoUpdate, setInfoUpdate] = useState()
    const [isModal, setIsModal] = useState(false)

    const baseUrl = 'https://users-crud.academlo.tech'
    const [users, getUsers, createUser, deleteUser, updateUser, getApiPhoto, infoPhoto] = useFetch(baseUrl)

    useEffect(() => {
        getUsers('/users')

    }, [])

    const modal = () => {        
        setIsModal(true)
        
    }

    return (
        <div className='app'>
            <div className='header'>
                <h1>User Crud</h1>
                <button className="button_create" onClick={modal}>Create</button>
            </div>

            {
                isModal ?
                    <FormUser
                        createUser={createUser}
                        infoUpdate={infoUpdate}
                        updateUser={updateUser}
                        setInfoUpdate={setInfoUpdate}
                        getApiPhoto={getApiPhoto}
                        setIsModal={setIsModal}
                    />
                    :
                    ''
            }

            <div className='cards_container'>
                {
                    users?.map(user => (
                        <UserCard
                            key={user.id}
                            user={user}
                            deleteUser={deleteUser}
                            setInfoUpdate={setInfoUpdate}
                            infoPhoto={infoPhoto}
                        />
                    ))
                }
            </div>

        </div>


    )

}

export default App
