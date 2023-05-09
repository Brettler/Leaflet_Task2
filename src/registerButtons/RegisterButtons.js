
import { Link } from 'react-router-dom';

function RegisterButtons() {
    return (
        <div>
            {/* Move to the login page to fill up the properties to log to the app*/}
            <Link to='/' className="btn btn-success">{'Register'}</Link>
            <span className="login-link">
                {"Already registered? "}
                {/* Move to the login page*/}
                <Link to='/'>{'Login here'}</Link>
            </span>
        </div>
    );
}

export default RegisterButtons;