import { requestObjetArchive, requestDelete } from '../service/archiver-service';
import { loadMongo } from './listeTirages-actions';

export const SEND_OBJET_ARCHIVE = "SEND_OBJET_ARCHIVE";

export const sendObjetArchive = (objetArchive,basicToken) => {
  return (dispatch) => {
    requestObjetArchive(objetArchive,basicToken)
      .then((response)=>{
        dispatch(sendArchiveAction(response))
      })
      .then(()=>{
        dispatch(loadMongo(basicToken));
      })
  };
};
const sendArchiveAction = (value) => {
  return {
    type: SEND_OBJET_ARCHIVE,
    archive: value
  };
};

export const DELETE_ARCHIVE = "DELETE_ARCHIVE";
export const deleteArchive = (id,basicToken) => {
  return (dispatch) => {
    requestDelete(id,basicToken)
      .then(()=>{
        dispatch(deleteAction());
      })
      .then(()=>{
        dispatch(loadMongo(basicToken));
      })
  };
};

const deleteAction = () => {
  return {
    type: DELETE_ARCHIVE
  };
};
