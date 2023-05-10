import LoginButtons from '../loginButtons/LoginButtons';
import LoginInfo from '../loginInfo/LoginInfo';
import usersRegisterList from "../registerInfo/UsersRegisterList";
import { useState } from 'react';
import './login.css'

/* This function recive a function as an argument.*/
function Login({setUserValidInfo}) {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const loginUser = () => {
        const user = usersRegisterList.find(
            (user) => user.username === loginUsername && user.password === loginPassword);
        if (user) {
            setUserValidInfo(user);
        } else {
            // Handle incorrect username/password
            setErrorMessage(true);
        }
    };
    const clearErrorMessage = () => {
        setErrorMessage(false);
    };

    return (
        <div id='login' className='loginPage'>
            <form>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        Invalid username or password, please try again
                    </div>
                )}

                <LoginInfo
                    loginUsername={loginUsername}
                    setLoginUsername={setLoginUsername}
                    loginPassword={loginPassword}
                    setLoginPassword={setLoginPassword}
                    clearErrorMessage={clearErrorMessage}
                />
                <LoginButtons loginUser={loginUser} />
            </form>
        </div>
    );
}
export default Login;