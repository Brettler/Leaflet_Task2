import RegisterButtons from '../registerButtons/RegisterButtons';
import RegisterInfo from '../registerInfo/RegisterInfo';
import './register.css'

/* This function recive a function as an argument.*/
function Register() {

    return (
        <div id='register' className='registerPage'>
            <form className="col-12">
                <RegisterInfo/>
                <RegisterButtons/>
            </form>
        </div>
    );
}
export default Register;