import LoginButtons from '../loginButtons/LoginButtons';
import LoginInfo from '../loginInfo/LoginInfo';
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import './login.css'

/* This function receive a function as an argument.*/
function Login({setUserValidInfo, usersRegisterList}) {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [redirectToChat, setRedirectToChat] = useState(false);

    const loginUser = (e) => {
        e.preventDefault();
        const user = usersRegisterList[loginUsername]
        if (user && user.registerPassword === loginPassword) {
            setUserValidInfo(user.registerUsername);
            setRedirectToChat(true);
        } else {
            // Handle incorrect username/password
            setErrorMessage(true);
        }
    };
    // Redirect to chat if redirectToChat is true
    if (redirectToChat) {
        return <Navigate to="/chat"/>;
    }

    const clearErrorMessage = () => {
        setErrorMessage(false);
    };

    return (
        <div id='login' className='loginPage'>
            <form>
                <LoginInfo
                    loginUsername={loginUsername}
                    setLoginUsername={setLoginUsername}
                    loginPassword={loginPassword}
                    setLoginPassword={setLoginPassword}
                    clearErrorMessage={clearErrorMessage}
                />
                {errorMessage && (
                    <div id="login-error" className="alert alert-danger" role="alert">
                        Invalid username or password, please try again
                    </div>
                )}
                <LoginButtons loginUser={loginUser}/>
            </form>
        </div>
    );
}

export default Login;