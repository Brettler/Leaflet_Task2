import React, { useState } from 'react';

/* In this section, we validate if the entered password matches the verified password. If they do not match,
* a relevant error message will be displayed. */
function RegPassword({validPassword, validVerifyPassword, regErrorPasswordMSG, regErrorVerifyPasswordMSG}) {
    const [verifyPasswordChanged, setVerifyPasswordChanged] = useState(false);

    return (
        <>
            {/* Password section */}
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" onChange={(e) => {
                        validPassword(e);
                        if (verifyPasswordChanged) {
                            validVerifyPassword(e);
                        }
                    }}/>
                    {regErrorPasswordMSG
                        && (
                            <div className="alert alert-danger" role="alert">
                                {regErrorPasswordMSG}
                            </div>
                        )}
                </div>
            </div>

            {/* Verify password section */}
            <div className="row mb-3">
                <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Verify Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword4" onChange={(e) => {
                        setVerifyPasswordChanged(true);
                        validVerifyPassword(e);
                    }}/>
                    {verifyPasswordChanged && regErrorVerifyPasswordMSG && (
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
