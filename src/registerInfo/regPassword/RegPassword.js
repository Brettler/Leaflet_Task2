import React, { useState, useEffect, useCallback } from 'react';

/* In this section, we validate if the entered password matches the verified password. If they do not match,
* a relevant error message will be displayed. */
function RegPassword({passwordRef, verifyPasswordRef,
                         validPassword, validVerifyPassword,
                         regErrorPasswordMSG, regErrorVerifyPasswordMSG}) {
    const [verifyPassword, setVerifyPassword] = useState('');


    const handleErrorPassword = (e) => {
        validPassword(e);
        e.target.setCustomValidity(regErrorPasswordMSG  || '');
    };

    const handleErrorVerifyPassword = useCallback((e) => {
        validVerifyPassword(e);
        setVerifyPassword(e.target.value);
        e.target.setCustomValidity(regErrorVerifyPasswordMSG  || '');
    }, [validVerifyPassword, regErrorVerifyPasswordMSG]);


    useEffect(() => {
        if (verifyPassword) {
            // Create a mock event object because validVerifyPassword only get events as an input.
            const event = {
                target: {
                    value: verifyPassword
                }
            };
            validVerifyPassword(event);
        }
    }, [verifyPassword, validVerifyPassword]);

    return (
        <>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input ref={passwordRef} type="password" className={`form-control ${regErrorPasswordMSG ? 'is-invalid' : ''}`}
                           id="inputPassword3"
                           onChange={handleErrorPassword}
                           onInvalid={(e) => e.target.setCustomValidity(regErrorPasswordMSG || '')}
                           required/>
                    <div className="invalid-feedback">
                        {regErrorPasswordMSG}
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Verify Password</label>
                <div className="col-sm-10">
                    <input ref={verifyPasswordRef} type="password" className={`form-control ${regErrorVerifyPasswordMSG ? 'is-invalid' : ''}`}
                           id="inputPassword4"
                           onChange={handleErrorVerifyPassword}
                           onInvalid={(e) => e.target.setCustomValidity(regErrorVerifyPasswordMSG || '')}
                           required/>
                    <div className="invalid-feedback">
                        {regErrorVerifyPasswordMSG}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegPassword;
