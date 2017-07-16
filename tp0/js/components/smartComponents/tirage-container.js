import { connect } from 'react-redux';
import { loadMongo } from '../../actions/listeTirages-actions';
import { deleteArchive } from '../../actions/archiver-actions';
import tirage from '../dumbComponents/tirage';

const mapStateToProps = (state,ownProps) => {
    return {
      id: ownProps.tirage.id,
      basicToken: state.login.basicToken
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
    loadMongo: (basicToken) => {
      dispatch(loadMongo(basicToken));
    },
    deleteArchive: (id,basicToken) => {
      dispatch(deleteArchive(id,basicToken));
    }
  }
};

const tirageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(tirage);

export default tirageContainer;
