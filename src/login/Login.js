import LoginButtons from '../loginButtons/LoginButtons';
import LoginInfo from '../loginInfo/LoginInfo';
import './login.css'


/* This function recive a function as an argument.*/
function Login() {

    return (
        <div id='login' className='loginPage'>
            <form>
                <LoginInfo/>
                <LoginButtons/>
            </form>
        </div>
    );
}
export default Login;