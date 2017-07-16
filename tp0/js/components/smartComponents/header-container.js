import { connect } from 'react-redux';
import header from '../dumbComponents/header';

const mapStateToProps = (state) => {
    return {
      userName: state.login.userName
    }
};

const mapDispatchToProps = (dispatch) => {
};

const headerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(header);

export default headerContainer;
