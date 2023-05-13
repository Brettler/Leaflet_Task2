import defaultPic from "../registerInfo/regImg/DefaultProfilePIC.png";

/* This function initializes all user information fields to empty strings, except for the profile picture,
* which is set to a default image. */
export const registerProperties = {
    registerPassword: '',
    registerUsername: '',
    registerDisplayName: '',
    registerImage: defaultPic,
};