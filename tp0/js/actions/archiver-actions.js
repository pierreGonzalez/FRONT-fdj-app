import { requestObjetArchive } from '../service/archiver-service';


export const SEND_OBJET_ARCHIVE = "SEND_OBJET_ARCHIVE";

export const sendObjetArchive = (objetArchive) => {
  return (dispatch) => {
    requestObjetArchive(objetArchive)
      .then((response)=>{
        dispatch(sendArchiveAction(response))
      });
  };
};
const sendArchiveAction = (value) => {
  return {
    type: SEND_OBJET_ARCHIVE,
    archive: value
  };
};


export const RESET_CHAMPS_ARCHIVER = "RESET_CHAMPS_ARCHIVER";

export const resetChampsArchiver = () => {
  return {
    type: RESET_CHAMPS_ARCHIVER
  };
};
export const CONTROLE_CHAMPS = "CONTROLE_CHAMPS";

export const controleChamps = (objetArchive) => {
  return {
    type: CONTROLE_CHAMPS,
    objetArchive
  };
};
