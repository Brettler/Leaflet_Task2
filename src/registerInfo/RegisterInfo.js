import RegUsername from "./RegUsername";
import RegPassword from "./regPassword/RegPassword";
import RegDisplayName from "./RegDisplayName";
import RegImg from "./RegImg";
import { useState } from 'react';
import CheckPassword from "./regPassword/CheckPassword";


function RegisterInfo() {
    const [isValid, setIsValid] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const validPassword = (e) => {
        console.log("Hi fofoffoof!!!!")
        const value = e.target.value;
        setPassword(value);
        setIsValid(CheckPassword(value));
    };

    const validVerifyPassword = (e) => {
        const value = e.target.value;
        setVerifyPassword(value);
        console.log(verifyPassword);
        if (verifyPassword !== password) {
            setVerifyPassword("Passwords do not match");
        } else {
            setVerifyPassword("")
        }
    };

    return (
        <>
            <RegUsername />
            <RegPassword validPassword={validPassword} validVerifyPassword={validVerifyPassword}/>
            <p>{isValid}</p>
            <p>{verifyPassword}</p>
            <RegDisplayName />
            <RegImg />
        </>
    );
}
export default RegisterInfo;