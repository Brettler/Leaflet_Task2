import './login.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/* This function recive a function as an argument.*/
function Login() {

    return (
        <body>

            <form>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"></input>
                            <label className="form-check-label" for="gridCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <span className="login-link">

                    <Link to='/chat' className="btn btn-success">{'Login'}</Link>

                </span>
                <span className="login-link">
                    <a href="register.html" className="btn btn-success">Register</a>
                </span>
            </form>

        </body>
    );
}
export default Login;