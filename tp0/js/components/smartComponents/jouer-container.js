import { connect } from 'react-redux';
import { sendDate } from '../../actions/jouer-actions';
import jouer from '../dumbComponents/jouer';

const mapStateToProps = (state) => {
    return {
      tirage: state.tirage
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
    sendDate: (datePickee) =>{
      dispatch(sendDate(datePickee));
    }
  }
};

const jouerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(jouer);

export default jouerContainer;
