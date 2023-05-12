import {Link} from 'react-router-dom';

/* The Register page features two buttons - one that navigates to the Login page, and the other that registers the user
* before redirecting them to the Login page. */
function RegisterButtons({handleSubmit}) {
    return (
        <div>
            <Link to='/' onClick={handleSubmit} className="btn btn-success">{'Register'}</Link>
            <span id="reg-to-login" className="login-link">
                {"Already registered? "}
                <Link to='/'>{'Login here'}</Link>
            </span>
        </div>
    );
}

export default RegisterButtons;