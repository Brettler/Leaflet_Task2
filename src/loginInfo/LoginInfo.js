import LoginPassword from "./LoginPassword";
import LoginUsername from "./LoginUsername";

function LoginInfo({ loginUsername, setLoginUsername, loginPassword, setLoginPassword }) {


    return (
        <>
            <LoginUsername loginUsername={loginUsername} setLoginUsername={setLoginUsername}/>
            <LoginPassword loginPassword={loginPassword} setLoginPassword={setLoginPassword}/>
        </>
    );
}
export default LoginInfo;