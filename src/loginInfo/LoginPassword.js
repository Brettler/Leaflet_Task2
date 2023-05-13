/* The password component verifies whether the login password entered is correct for the specific username entered.  */
function LoginPassword({ loginPassword, setLoginPassword }) {
    return (
        <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" value={loginPassword}
                       onChange={(e) => setLoginPassword(e.target.value)}/>
            </div>
        </div>
    );
}
export default LoginPassword;