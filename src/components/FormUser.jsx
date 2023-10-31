import { useEffect } from "react";
import { useForm } from "react-hook-form";


const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, setIsModal, updateInfoEdit}) => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    useEffect(() => {
        reset(infoUpdate)

    }, [infoUpdate])

    const submit = (data) => {

        if (infoUpdate) {
            //Update
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
            setIsModal(false)
            updateInfoEdit()
            
        } else {
            // Create
            createUser('/users', data)
            setIsModal(false)
            
            
            
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''

        })
    }

    const exitModal = () => {        
        setIsModal(false)
    }

    const prevForm = (e) => {
        e.stopPropagation();
    }

    const exitModalisContent = () => {        
        setIsModal(false)
    }

    return (
        <div className="form_container" onClick={exitModal}>
            <form onSubmit={handleSubmit(submit)} onClick={prevForm} >
                <h3>Create User</h3>
                <div className="box_camp">
                    <label htmlFor="email">Email</label>
                    <input {...register('email', {required: 'El email es requerido'})} type="email" id="email" />
                    {errors.email && <p className="alert">{errors.email.message}</p>}
                </div>
                <div className="box_camp">
                    <label htmlFor="password">Password</label>
                    <input {...register('password', {required: 'El password es requerido'})} type="password" id="password" />
                    {errors.password && <p className="alert">{errors.password.message}</p>}
                </div>
                <div className="box_camp">
                    <label htmlFor="first_name">First name</label>
                    <input {...register('first_name', {required: 'El nombre es requerido'})} type="text" id="first_name" />
                    {errors.first_name && <p className="alert">{errors.first_name.message}</p>}
                </div>
                <div className="box_camp">
                    <label htmlFor="last_name">Last name</label>
                    <input {...register('last_name', {required: 'El apellido es requerido'})} type="text" id="last_name" />
                    {errors.last_name && <p className="alert">{errors.last_name.message}</p>}
                </div>
                <div className="box_camp">
                    <label htmlFor="gender">Gender</label>
                    <select {...register("gender", {required: 'El genero es requerido'})} name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="alert">{errors.gender.message}</p>}
                </div>
                <div className="box_camp">
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday', {required: 'La fecha de cumpleaños es requerido'})} type="date" id="birthday" />
                    {errors.birthday && <p className="alert">{errors.email.message}</p>}
                </div>
                <button className="button_create_form">{infoUpdate ? 'Update' : 'Create'}</button>


            </form>
        </div>
    )
}
export default FormUser