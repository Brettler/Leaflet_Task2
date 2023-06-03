import RegisterButtons from '../registerButtons/RegisterButtons';
import RegisterInfo from '../registerInfo/RegisterInfo';
import './register.css'
import React, { useState, useRef } from 'react';
import {registerProperties} from '../registerInfo/RegProperties'
import { Navigate } from 'react-router-dom';
import createRegisterRequestBody from "../API/RegisterAdapter";

/* The Register page logic encompasses all essential fields for a new user to complete their registration. These
* mandatory fields comprise the username, password, verify password, and display name. Additionally, there is an
* optional field for uploading a profile picture, which will be displayed to the user upon successful upload. In case
* the user opts not to upload a picture, a default image will be assigned to them. At the bottom of the page, there is
* a Register button that can be clicked after filling in all mandatory fields and a link to the Login page for users
* who have already signed up.
 */
function Register({ setUsersRegisterList, usersRegisterList }) {
    const [properties, setProperties] = useState(registerProperties);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [regErrorPasswordMSG, setRegErrorPasswordMSG] = useState("");
    const [regErrorVerifyPasswordMSG, setRegErrorVerifyPasswordMSG] = useState("");
    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
    const usernameRef = useRef();
    const passwordRef = useRef();
    const verifyPasswordRef = useRef();
    const displayNameRef = useRef();
    // Create a user object that holds all the relevant information about the user.
    const handleSubmit = async  (e) => {
        e.preventDefault();
        const userInfo = {
            registerUsername: properties.registerUsername,
            registerPassword: properties.registerPassword,
            registerDisplayName: properties.registerDisplayName,
            registerImage: properties.registerImage,
            chatHistory: {},
            friendsList: [],
            friendsInfo: {},
        };
        // Ensure that all required fields have been completed..
        if (!userInfo.registerUsername) {
            usernameRef.current.focus();
            setErrorMessage('Please fill out all fields');
            return;
        } else if( usernameErrorMsg) {
            usernameRef.current.focus();
            setErrorMessage('Invalid values fields');
            return;
        }

        if (!userInfo.registerPassword) {
            passwordRef.current.focus();
            setErrorMessage('Please fill out all fields');
            return;
       } else if( regErrorPasswordMSG) {
            passwordRef.current.focus();
            setErrorMessage('Invalid values fields');
            return;
        } else if( regErrorVerifyPasswordMSG) {
            verifyPasswordRef.current.focus();
            setErrorMessage('Invalid values fields');
            return;
        }

        if (!userInfo.registerDisplayName) {
            displayNameRef.current.focus();
            setErrorMessage('Please fill out all fields');
            return;
        }


        const requestBody = createRegisterRequestBody(userInfo);
        console.log("Sending request to server", requestBody);
        const response = await fetch('http://localhost:5000/api/Users', {
            'method': 'post',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(requestBody)
        });
        console.log("Server Response", response);

        let data = {};

        // This part is only if the server send us something in the body.
        // In this case of register, the server will just send us 200 if the register went smooth and each other
        // number that indicates something else. for excample 409 if there is already user with the same username.
        // If the reposnse is only feedback with numbers, ' data = await response.json()' will give us error.
        try {
            data = await response.json();
            console.log("Server Response Body", data);
        } catch (err) {
            console.error("Failed to parse response body", err);
        }

        if (response.ok) {
            // Update the list of registered users..
            setUsersRegisterList(prevUsers => {
                const updatedUsers = {...prevUsers};
                updatedUsers[userInfo.registerUsername] = userInfo;
                setRedirectToLogin(true);
                return updatedUsers;
            })
            setRedirectToLogin(true);
        } else {
            setErrorMessage(data.message || 'Failed to register');
        }






    };


    // Redirect to the Login page once registration is complete.
    const handlError = function () {
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

    // Register page structure.
    return (
        <div id='register' className='registerPage'>
            <form className="col-12">
                <RegisterInfo usernameRef={usernameRef}
                              passwordRef={passwordRef}
                              verifyPasswordRef={verifyPasswordRef}
                              displayNameRef={displayNameRef}
                              properties={properties}
                              setProperties={setProperties}
                              usersRegisterList={usersRegisterList}
                              regErrorPasswordMSG ={regErrorPasswordMSG}
                              setRegErrorPasswordMSG={setRegErrorPasswordMSG}
                              regErrorVerifyPasswordMSG={regErrorVerifyPasswordMSG}
                              setRegErrorVerifyPasswordMSG={setRegErrorVerifyPasswordMSG}
                              usernameErrorMsg={usernameErrorMsg}
                              setUsernameErrorMsg={setUsernameErrorMsg}
                              handleSubmit={handleSubmit}
                />

                <RegisterButtons handleSubmit={handleSubmit}/>
                {handlError()}
            </form>
        </div>
    );
}
export default Register;