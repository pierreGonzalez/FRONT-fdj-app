import { connect } from 'react-redux';
import header from '../dumbComponents/header';

const mapStateToProps = (state) => {
    return {
      basicToken: state.basicToken
    }
};

const mapDispatchToProps = (dispatch) => {
};

const headerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(header);

export default headerContainer;
