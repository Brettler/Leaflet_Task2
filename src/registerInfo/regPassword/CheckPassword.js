/* In this section, we verify whether the entered password meets the necessary criteria.
* It must comprise at least five characters, including one digit, one lowercase letter, and one uppercase letter. */
function CheckPassword(password) {
    let errorMsg = "";

    if (!password) {
        errorMsg = "Password is required";
    } else if (password.length < 5) {
        errorMsg = "Password must be at least 5 characters long";
    } else if (!/[a-z]/.test(password)) {
        errorMsg = "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(password)) {
        errorMsg = "Password must contain at least one uppercase letter";
    } else if (!/\d/.test(password)) {
        errorMsg = "Password must contain at least one digit";
    }

    return errorMsg;
}
export default CheckPassword;