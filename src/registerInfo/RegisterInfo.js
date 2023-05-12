import RegUsername from "./RegUsername";
import RegPassword from "./regPassword/RegPassword";
import RegDisplayName from "./RegDisplayName";
import RegImg from "./regImg/RegImg";
import CheckPassword from "./regPassword/CheckPassword";

function RegisterInfo({properties, setProperties,
                          usersRegisterList,regErrorPasswordMSG,
                          setRegErrorPasswordMSG,
                          regErrorVerifyPasswordMSG, setRegErrorVerifyPasswordMSG,
                          usernameErrorMsg, setUsernameErrorMsg}) {

    const validUsername = (value) => {
        const userExists = usersRegisterList[value];
        if(userExists) {
            setUsernameErrorMsg("This username is already taken");
        } else {
            setUsernameErrorMsg("");
        }
        setProperties({...properties, registerUsername: value});
    };

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

    const validVerifyPassword = (e) => {
        const value = e.target.value;

        if (value !== properties.registerPassword) {
            setRegErrorVerifyPasswordMSG("Passwords do not match");
        } else {
            setRegErrorVerifyPasswordMSG("");
        }
    };

    return (
        <>
            <RegUsername registerUsername={properties.registerUsername}
                         setRegisterUsername={validUsername}
                         usernameErrorMsg={usernameErrorMsg} />
            <RegPassword validPassword={validPassword}
                         validVerifyPassword={validVerifyPassword}
                         regErrorPasswordMSG={regErrorPasswordMSG}
                         regErrorVerifyPasswordMSG={regErrorVerifyPasswordMSG}/>
            <RegDisplayName registerDisplayName={properties.registerDisplayName}
                            setRegisterDisplayName={(value) => setProperties({...properties, registerDisplayName: value})}/>
            <RegImg registerImage={properties.registerImage}
                    setRegisterImage={(value) => setProperties({...properties, registerImage: value})}/>
        </>
    );
}
export default RegisterInfo;