import RegUsername from "./RegUsername";
import RegPassword from "./regPassword/RegPassword";
import RegDisplayName from "./RegDisplayName";
import RegImg from "./regImg/RegImg";
import { useState } from 'react';
import CheckPassword from "./regPassword/CheckPassword";
import defaultPic from './regImg/DefaultProfilePIC.png'


function RegisterInfo({properties, setProperties}) {
    const [isValid, setIsValid] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const validPassword = (e) => {
        const value = e.target.value;
        setProperties({...properties, registerPassword: value});
        setIsValid(CheckPassword(value));
    };

    const validVerifyPassword = (e) => {
        const value = e.target.value;

        if (value !== properties.registerPassword) {
            setErrorMsg("Passwords do not match");
        } else {
            setErrorMsg("");
        }
    };

    return (
        <>
            <RegUsername registerUsername={properties.registerUsername} setRegisterUsername={(value) => setProperties({...properties, registerUsername: value})} />
            <RegPassword validPassword={validPassword} validVerifyPassword={validVerifyPassword} isValid={isValid} errorMsg={errorMsg}/>
            <RegDisplayName registerDisplayName={properties.registerDisplayName} setRegisterDisplayName={(value) => setProperties({...properties, registerDisplayName: value})}/>
            <RegImg registerImage={properties.registerImage} setRegisterImage={(value) => setProperties({...properties, registerImage: value})}/>
        </>
    );
}
export default RegisterInfo;