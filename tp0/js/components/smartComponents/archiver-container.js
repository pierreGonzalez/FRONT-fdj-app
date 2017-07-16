import { connect } from 'react-redux';
import { sendObjetArchive,resetChampsArchiver,deleteArchive } from '../../actions/archiver-actions';
import archiver from '../dumbComponents/archiver';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
    return {
      archive: state.archive.message,
      tirage: _.find(state.listeTirages, {id: ownProps.params.id}) || {},
      hidden: state.archive.hidden,
      basicToken: state.login.basicToken
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
    sendObjetArchive: (objetArchive,basicToken) => {
      dispatch(sendObjetArchive(objetArchive,basicToken));
    }
  }
};

const archiverContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(archiver);

export default archiverContainer;
