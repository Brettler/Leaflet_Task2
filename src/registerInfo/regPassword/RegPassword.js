function RegPassword({ validPassword, validVerifyPassword, regErrorPasswordMSG, regErrorVerifyPasswordMSG}) {

    return (
        <>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10" >
                    <input type="password" className="form-control" id="inputPassword3" onChange={(e) => {validPassword(e); validVerifyPassword(e);}} />
                    {regErrorPasswordMSG
                        && (
                            <div className="alert alert-danger" role="alert">
                                {regErrorPasswordMSG}
                            </div>
                        )}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">
                    Verify Password
                </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword4" onChange={validVerifyPassword} />
                    {regErrorVerifyPasswordMSG && (
                        <div className="alert alert-danger" role="alert">
                            {regErrorVerifyPasswordMSG}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default RegPassword;