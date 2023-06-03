
function createRegisterRequestBody(userInfo) {
    return {
        username: userInfo.registerUsername,
        password: userInfo.registerPassword,
        displayName: userInfo.registerDisplayName,
        profilePic: userInfo.registerImage,
    };
}
export default createRegisterRequestBody;