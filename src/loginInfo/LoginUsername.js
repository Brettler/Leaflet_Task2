/* The username component verifies if the entered username is registered. */
function LoginUsername({ loginUsername, setLoginUsername }) {

    return (
        <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" value={loginUsername}
                       onChange={(e) => setLoginUsername(e.target.value)}/>
            </div>
        </div>
    );
}
export default LoginUsername;