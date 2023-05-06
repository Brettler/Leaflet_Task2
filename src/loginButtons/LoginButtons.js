
import { Link } from 'react-router-dom';

function LoginButtons() {
    return (
        <>
            <span className="login-link">
                <Link to='/chat' className="btn btn-success">{'Login'}</Link>
            </span>
            <span className="register-link">
                <Link to='/register' className="btn btn-success">{'Register'}</Link>
            </span>
        </>
    );
}

export default LoginButtons;