
export const LOGIN = "LOGIN";

export const doLogin = (token) => {
  let basicToken = btoa(token);
  return (dispatch) => {
    dispatch(doLoginAction(basicToken));
  };
};

const doLoginAction = (basicToken) => {
  return {
    type: LOGIN,
    basicToken
  };
};

export const LOGOUT = "LOGOUT";

export const doLogout = () => {
  return (dispatch) => {
    dispatch(doLogoutAction());
  };
};

const doLogoutAction = () => {
  return {
    type: LOGOUT
  }
}
