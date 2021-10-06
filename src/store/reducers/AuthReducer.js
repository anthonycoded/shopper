const USER_LOGIN_ATTEMPT = "USER_LOGIN_ATTEMPT";

//SET INITIAL STATE
const initialState = {
  loading: null,
  message: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    ///LOGIN ATTEMPT
    case USER_LOGIN_ATTEMPT:
      return {
        ...state,
        message: null,
        loading: true,
      };

    default:
      return state;
  }
};
