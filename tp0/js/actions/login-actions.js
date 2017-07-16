import { requestUserName } from '../service/login-service';

export const LOGIN = "LOGIN";

export const doLogin = (token) => {
  let basicToken = btoa(token);
  return (dispatch) => {
    requestUserName(basicToken)
    .then((userName)=>{
      dispatch(doLoginAction(basicToken,userName));
    });
  };
};

const doLoginAction = (basicToken,userName) => {
  let login = {
    basicToken,
    userName
  };
  return {
    type: LOGIN,
    login
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
