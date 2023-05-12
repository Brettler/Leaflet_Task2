import {Link} from 'react-router-dom';

/* The Login page contains two buttons - one that directs to the Chats page, and the other that directs to the
* Register page. */
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