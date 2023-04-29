import './register.css'
import { Link } from 'react-router-dom';
/* This function recive a function as an argument.*/
function Register() {

    return (
        <div id='register' className='registerPage'>

            <form className="col-12">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">
                        Verify Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">
                        Display Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="formFile" className="col-sm-2 col-form-label">
                        Picture
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <img
                            src="fall.JPG"
                            alt="Lemon Lime Buddies"
                            className="img-fluid small-image mt-1"
                        />
                    </div>
                </div>
                <div>
                     {/* Move to the login page to fill up the properties to log to the app*/}
                    <Link to='/' className="btn btn-success">{'Register'}</Link>
                    <span className="login-link">
                        {"Already registered? "}
                        {/* Move to the login page*/}
                        <Link to='/'>{'Login here'}</Link>
                    </span>
                </div>
            </form>


        </div>
    );
}
export default Register;