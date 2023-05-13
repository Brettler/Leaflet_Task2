import RegUsername from "./RegUsername";
import RegPassword from "./regPassword/RegPassword";
import RegDisplayName from "./RegDisplayName";
import RegImg from "./regImg/RegImg";
import CheckPassword from "./regPassword/CheckPassword";

/* This function manages all user information during registration, comprising the username, password, verify password,
* display name, and profile picture. It verifies that the passwords match and that the chosen username is not already
* in use. */
function RegisterInfo({   usernameRef, passwordRef, verifyPasswordRef, displayNameRef,
                          properties, setProperties,
                          usersRegisterList, regErrorPasswordMSG,
                          setRegErrorPasswordMSG,
                          regErrorVerifyPasswordMSG, setRegErrorVerifyPasswordMSG,
                          usernameErrorMsg, setUsernameErrorMsg
                      }) {

    // Verify that the chosen username is not already in use, regardless of upper or lower case letters.
    const validUsername = (value) => {
        const userExists = Object.keys(usersRegisterList).find(
            (username) => username.toLowerCase().replace(/\s/g, '') === value.toLowerCase().replace(/\s/g, '')
        );
        if (userExists) {
            setUsernameErrorMsg("This username is already taken");
        } else {
            setUsernameErrorMsg("");
        }
        setProperties({...properties, registerUsername: value});
    };

    // This function verifies if the entered password complies with all requirements.
    const validPassword = (e) => {
        const value = e.target.value;
        const passwordErrorMsg = CheckPassword(value)
        setProperties({...properties, registerPassword: value});
        if (passwordErrorMsg !== "") {
            setRegErrorPasswordMSG(passwordErrorMsg);
        } else {
            setRegErrorPasswordMSG("");
        }

    };

    // This function validates whether the "verify password" field matches the "password" field.
    const validVerifyPassword = (e) => {
        const value = e.target.value;
        if (value !== properties.registerPassword) {
            setRegErrorVerifyPasswordMSG("Passwords do not match");
        } else {
            setRegErrorVerifyPasswordMSG("");
        }
    };

    // Saves all the user information provided during registration.
    return (
        <>
            <RegUsername usernameRef={usernameRef}
                         registerUsername={properties.registerUsername}
                         setRegisterUsername={validUsername}
                         usernameErrorMsg={usernameErrorMsg}/>
            <RegPassword passwordRef={passwordRef}
                         verifyPasswordRef={verifyPasswordRef}
                         validPassword={validPassword}
                         validVerifyPassword={validVerifyPassword}
                         regErrorPasswordMSG={regErrorPasswordMSG}
                         regErrorVerifyPasswordMSG={regErrorVerifyPasswordMSG}/>
            <RegDisplayName displayNameRef={displayNameRef}
                            registerDisplayName={properties.registerDisplayName}
                            setRegisterDisplayName={(value) => setProperties({
                                ...properties,
                                registerDisplayName: value
                            })}/>
            <RegImg registerImage={properties.registerImage}
                    setRegisterImage={(value) => setProperties({...properties, registerImage: value})}/>
        </>
    );
}

export default RegisterInfo;