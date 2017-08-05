import { connect } from 'react-redux';
import home from '../dumbComponents/home';

const mapStateToProps = (state) => {
    return {
      userName: state.login.userName
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
  }
};

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(home);

export default homeContainer;
