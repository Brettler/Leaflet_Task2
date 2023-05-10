
import { Link } from 'react-router-dom';

function RegisterButtons({ handleSubmit }) {
    return (

        <div>
            {/* Move to the login page to fill up the properties to log to the app*/}
            <Link to='/' onClick={handleSubmit} className="btn btn-success">{'Register'}</Link>
            <span className="login-link">
                    {"Already registered? "}
                {/* Move to the login page*/}
                <Link to='/'>{'Login here'}</Link>
                </span>
        </div>

    );
}

export default RegisterButtons;