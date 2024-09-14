
// const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Apis for ENDPOINTS
export const endpoints= {
    SEND_OTP_API: BASE_URL + "/userRouter/sendOtp",
    SIGNUP_API: BASE_URL + "/userRouter/sign-up",
    LOGIN_API: BASE_URL + "/userRouter/login",
    RESETPASSTOKEN_API : BASE_URL+"/userRouter/resetPasswordToken",
    RESETPASSWORD_API : BASE_URL+"/userRouter/resetPassword"
}

// profile of user getting ENPOINTS
export const  profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL+"/profile/getAlluserDetails",

}
// updation of the setting at the profile ENPOINTS
export const settingEndpoints = {
    UPDATE_PROFILE_API: BASE_URL+ "/profile/updateProfile",
    DELETE_PROFILE_API: BASE_URL+ "/profile/deleteProfile",
    CHANGE_PASSWORD_API: BASE_URL+ "/userRouter/changePassword",
}
// contact us
export const contact_us={

    CONTACT_US_API: BASE_URL + "/contactUs/contactUsrouter"
}