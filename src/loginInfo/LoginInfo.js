import LoginPassword from "./LoginPassword";
import LoginUsername from "./LoginUsername";

/* The Login Information component comprises two input boxes for the user to enter their username and password. */
function LoginInfo({ loginUsername, setLoginUsername, loginPassword, setLoginPassword }) {
    return (
        <>
            <LoginUsername loginUsername={loginUsername} setLoginUsername={setLoginUsername}/>
            <LoginPassword loginPassword={loginPassword} setLoginPassword={setLoginPassword}/>
        </>
    );
}
export default LoginInfo;