import { connect } from 'react-redux';
import { loadMongo } from '../../actions/listeTirages-actions';
import listeTirages from '../dumbComponents/listeTirages';

const mapStateToProps = (state) => {
    return {
      listeTirages: state.listeTirages,
      basicToken: state.login.basicToken
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
    loadMongo: (basicToken) => {
      dispatch(loadMongo(basicToken));
    }
  }
};

const listeTiragesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(listeTirages);

export default listeTiragesContainer;
