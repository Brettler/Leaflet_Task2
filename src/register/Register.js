import RegisterButtons from '../registerButtons/RegisterButtons';
import RegisterInfo from '../registerInfo/RegisterInfo';
import './register.css'
import { useState } from 'react';
import usersRegisterList from "../registerInfo/UsersRegisterList";
import {registerProperties} from '../registerInfo/RegProperties'

/* This function recive a function as an argument.*/
function Register({ setUsersRegisterList }) {
    const [properties, setProperties] = useState(registerProperties);


    const handleSubmit = () => {
        const userInfo = {
            registerUsername: properties.registerUsername,
            registerPassword: properties.registerPassword,
            registerDisplayName: properties.registerDisplayName,
            registerImage: properties.registerImage,
        };
        setUsersRegisterList(prevUsers => [...prevUsers, userInfo]);
        console.log('usersRegisterList:', usersRegisterList);
    };


    return (
        <div id='register' className='registerPage'>
            <form className="col-12">
                <RegisterInfo properties={properties} setProperties={setProperties} handleSubmit={handleSubmit}/>
                <RegisterButtons handleSubmit={() => handleSubmit()}/>
            </form>
        </div>
    );
}
export default Register;