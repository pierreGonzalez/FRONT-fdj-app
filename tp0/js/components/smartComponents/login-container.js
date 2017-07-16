import { connect } from 'react-redux';
import { doLogin, doLogout } from '../../actions/login-actions';
import login from '../dumbComponents/login';

const mapStateToProps = (state) => {
    return {
      basicToken: state.login.basicToken
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (token) => {
      dispatch(doLogin(token));
    },
    doLogout: () => {
      dispatch(doLogout());
    }
  }
};

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(login);

export default loginContainer;
