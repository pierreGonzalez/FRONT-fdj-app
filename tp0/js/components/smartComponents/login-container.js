import { connect } from 'react-redux';
import { doLogin } from '../../actions/login-actions';
import login from '../dumbComponents/login';

const mapStateToProps = (state) => {
    return {
      basicToken: state.basicToken
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (token) => {
      dispatch(doLogin(token));
    }
  }
};

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(login);

export default loginContainer;
