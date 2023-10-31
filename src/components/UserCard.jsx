


const UserCard = ({ user, deleteUser, setInfoUpdate, setIsModal }) => {



    const handleDelete = () => {
        deleteUser('/users', user.id)

    }


    const handleEdit = () => {
        setInfoUpdate (user)
        setIsModal(true)
    }

    return (
        <article className="card_container">
            <div className="card_infoUser">
                <div className="card_photo_container">
                    <img src={user.image_url} alt="" />
                </div>
                <div className="card_infoDetails">
                    <h3>{`${user.first_name} ${user.last_name}`}</h3>
                    <ul>
                        <li><span className="email">Email: </span><span className="user_email">{user.email}</span></li>
                        <li><span className="birthday">Birthday: </span><span className="user_birthday">{user.birthday}</span></li>

                    </ul>
                    <div className="buttons_action">
                        <button className="button_delete" onClick={handleDelete}>Delete</button>
                        <button className="button_edit" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            </div>

        </article>
    )
}



export default UserCard