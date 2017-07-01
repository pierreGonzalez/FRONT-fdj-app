import { connect } from 'react-redux';
import { sendObjetArchive,resetChampsArchiver,controleChamps } from '../../actions/archiver-actions';
import archiver from '../dumbComponents/archiver';

const mapStateToProps = (state) => {
    return {
      archive: state.archive.message,
      hidden: state.archive.hidden
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
    sendObjetArchive: (objetArchive) => {
      dispatch(sendObjetArchive(objetArchive));
    },
    resetChampsArchiver: () => {
      dispatch(resetChampsArchiver());
    },
    controleChamps:(objetArchive)=>{
      dispatch(controleChamps(objetArchive));
    }
  }
};

const archiverContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(archiver);

export default archiverContainer;
