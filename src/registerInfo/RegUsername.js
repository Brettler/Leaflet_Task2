/* The username field allows the user to choose their desired username, ensuring that it is not already in use by
* another user. The username is case-insensitive. */
function RegUsername({usernameRef, registerUsername, setRegisterUsername, usernameErrorMsg}) {
    const handleUsernameChange = (e) => {
        setRegisterUsername(e.target.value);
        e.target.setCustomValidity(usernameErrorMsg || '');
    };

    return (
        <div className="row mb-3">
            <label htmlFor="inputUserameAPP" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input ref={usernameRef} type="text" className={`form-control ${usernameErrorMsg ? 'is-invalid' : ''}`}
                       id="inputUserameAPP"
                       value={registerUsername}
                       onChange={handleUsernameChange}
                       onInvalid={(e) => e.target.setCustomValidity(usernameErrorMsg || '')}
                       required/>
                <div className="invalid-feedback">
                    {usernameErrorMsg}
                </div>
            </div>
        </div>
    );
}

export default RegUsername;