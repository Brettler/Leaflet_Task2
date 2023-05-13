/* The username field allows the user to choose their desired username, ensuring that it is not already in use by
* another user. The username is case-insensitive. */
function RegUsername({registerUsername, setRegisterUsername, usernameErrorMsg}) {

    return (
        <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="inputEmail3" value={registerUsername}
                       onChange={(e) => setRegisterUsername(e.target.value)} required/>
                {usernameErrorMsg && <div className="alert alert-danger">{usernameErrorMsg}</div>}
            </div>
        </div>
    );
}

export default RegUsername;