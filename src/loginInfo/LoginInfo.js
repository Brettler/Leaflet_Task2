import LoginPassword from "./LoginPassword";
import { useState } from 'react';
import isValidPassword from "./isValidPassword";

function LoginInfo() {
    const [isValid, setIsValid] = useState("");

    const validPassword = (e) => {
        const value = e.target.value;
        setIsValid(isValidPassword({password: value}));
        console.log(isValid);
    };

    return (
        <>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3"></input>
                </div>
            </div>
            <LoginPassword validPassword={validPassword}/>
            <p>{isValid}</p>
        </>
    );
}
export default LoginInfo;