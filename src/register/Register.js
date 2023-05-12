import RegisterButtons from '../registerButtons/RegisterButtons';
import RegisterInfo from '../registerInfo/RegisterInfo';
import './register.css'
import { useState } from 'react';
import {registerProperties} from '../registerInfo/RegProperties'
import { Navigate } from 'react-router-dom';


/* This function recive a function as an argument.*/
function Register({ setUsersRegisterList, usersRegisterList }) {
    const [properties, setProperties] = useState(registerProperties);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [regErrorPasswordMSG, setRegErrorPasswordMSG] = useState("");
    const [regErrorVerifyPasswordMSG, setRegErrorVerifyPasswordMSG] = useState("");
    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Creating an user object that contain all the information we need.
        const userInfo = {
            registerUsername: properties.registerUsername,
            registerPassword: properties.registerPassword,
            registerDisplayName: properties.registerDisplayName,
            registerImage: properties.registerImage,
            chatHistory: {}, // chatHistory object will later store the chat history with each friend.
            friendsList: [], // friendList array will later store the list of friends of the user.
        };

        // Validate user inputs
        if (!userInfo.registerUsername || !userInfo.registerPassword || !userInfo.registerDisplayName) {
            setErrorMessage('Please fill out all fields');
            return;
        } else if(regErrorPasswordMSG || regErrorVerifyPasswordMSG || usernameErrorMsg) {
            setErrorMessage('Invalid values fields');
            return;
        }

        setUsersRegisterList(prevUsers => {
            const updatedUsers = {...prevUsers};
            updatedUsers[userInfo.registerUsername] = userInfo;
            console.log('Updated usersRegisterList:', updatedUsers);
            setRedirectToLogin(true);
            return updatedUsers;
        })
    };

    const handlError = function () {
        // Redirect to login if registration is successful
        if (redirectToLogin) {
            return <Navigate to="/" />;
        } else {
            return (
                errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
            );
        }
    }


    return (
        <div id='register' className='registerPage'>
            <form className="col-12">

                <RegisterInfo properties={properties}
                              setProperties={setProperties}
                              usersRegisterList={usersRegisterList}
                              regErrorPasswordMSG ={regErrorPasswordMSG}
                              setRegErrorPasswordMSG={setRegErrorPasswordMSG}
                              regErrorVerifyPasswordMSG={regErrorVerifyPasswordMSG}
                              setRegErrorVerifyPasswordMSG={setRegErrorVerifyPasswordMSG}
                              usernameErrorMsg={usernameErrorMsg}
                              setUsernameErrorMsg={setUsernameErrorMsg}
                              handleSubmit={handleSubmit}/>

                <RegisterButtons handleSubmit={handleSubmit}/>
                {handlError()}

            </form>
        </div>
    );
}
export default Register;