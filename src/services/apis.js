
// const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Apis for ENDPOINTS
export const endpoints= {
    SEND_OTP_API: BASE_URL + "/userRouter/sendOtp",
    SEND_OTP_ADMIN_API_URL : BASE_URL + "/userRouter/sendOtpForAdmin",
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

export const products = {

    GET_ALL_PRODUCT_API : BASE_URL+ "/productRouter/getAllproducts",
    CREATE_PRODUCT_API : BASE_URL+ "/productRouter/createProduct",
    CREATE_PRODUCT_IMAGE_API : BASE_URL+ "/productRouter/createProductImage",
    DELETE_PRODUCT_IMAGE_API : BASE_URL+ "/productRouter/deleteProductImage",
    GET_PRODUCT_DETAIL_API: BASE_URL + "/productRouter/getProductDetail",
    UPDATE_PRODUCT_API: BASE_URL + "/productRouter/updateProduct",
    UPDATE_PRODUCTIMAGE_API: BASE_URL + "/productRouter/updateProductImage",
    GET_PAYMENT_API: BASE_URL + "/productRouter/capturePayment",
    GET_PAYMENT_STATUS_API: BASE_URL + "/productRouter/findUnpaidPayments",
    GET_PAYMENT_DONE_STATUS_API: BASE_URL + "/productRouter/PaymentStatusUpdate"

}

export const categoryEndpoint={

    CREATE_CATEGORY_API: BASE_URL + "/productRouter/createCategories",
    UPDATE_CATEGORY_API: BASE_URL + "/productRouter/updateCategory",

    GET_ALL_CATEGORY_API: BASE_URL + "/productRouter/getAllCategories",
    GET_CATEGORY_PRODUCT_API: BASE_URL + "/productRouter/getCategoryProducts",
    GET_TAG_PRODUCT_API: BASE_URL + "/productRouter/getTagsProducts",

}