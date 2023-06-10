import LoginButtons from '../loginButtons/LoginButtons';
import LoginInfo from '../loginInfo/LoginInfo';
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import './login.css'

/* The logic of the Login page involves two input fields for the user to enter their username and password,
* as well as two buttons for either signing in or being redirected to the register page. When the user inputs a valid
* username and password, clicking on the login button will take them to their chat page. If the username or password
* is invalid, an error message will be displayed. In case the user is not yet registered, they can click on the register
* button to create a new account. */
function Login({setUserValidInfo, setUserToken}) {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [redirectToChat, setRedirectToChat] = useState(false);

    // Verify whether the entered username and password correspond with each other.
    const loginUser = async (e) => {
        e.preventDefault();
        /* THIS LOGIC IS CLIENT SIDE. WE WILL NEED TO MOVE IT TO THE SERVER SIDE WHEN HE BUILD IT. */
        // const user = usersRegisterList[loginUsername]
        // if (user && user.registerPassword === loginPassword) {
        //     setUserValidInfo(user.registerUsername);
        //     setRedirectToChat(true);
        // } else {
        //     setErrorMessage(true);
        // }
        const userCredentials = {
            username: loginUsername,
            password: loginPassword,
        };

        console.log("Sending to server: ", userCredentials);

        const response = await fetch("/api/Tokens", {
            'method': "post",
            'headers': { "Content-Type": "application/json" },
            'body': JSON.stringify(userCredentials)
        });

        if (response.ok) {
            const tokenJWT = await response.text();
            console.log("Received from server: ", tokenJWT);

            localStorage.setItem("token", tokenJWT);
            setUserValidInfo(loginUsername);
            setUserToken(tokenJWT)
            setRedirectToChat(true);
        } else {
            setErrorMessage(true);
        }
    };
    // Redirect to chat page if the username and password match.
    if (redirectToChat) {
        return <Navigate to="/chat"/>;
    }

    const clearErrorMessage = () => {
        setErrorMessage(false);
    }

    // Login page structure.
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