
import { Link } from 'react-router-dom';

function LoginButtons({ loginUser }) {
    return (
        <>
            <span className="login-link">
                <Link to='/chat' className="btn btn-success" onClick={loginUser}>{'Login'}</Link>
            </span>
            <span className="register-link">
                <Link to='/register' className="btn btn-success">{'Register'}</Link>
            </span>
        </>
    );
}

export default LoginButtons;