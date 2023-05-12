import {Link} from 'react-router-dom';

function LoginButtons({loginUser}) {
    return (
        <>
            <div id="login-buttons" className="btn-group">
                <span className="login-link">
                    <Link to='/chat' className="btn btn-success login-pair-btn" onClick={loginUser}>{'Login'}</Link>
                </span>
                <span className="register-link">
                    <Link to='/register' className="btn btn-success login-pair-btn">{'Register'}</Link>
                </span>
            </div>
        </>
    );
}

export default LoginButtons;