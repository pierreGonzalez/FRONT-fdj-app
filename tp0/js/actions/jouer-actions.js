import { requestDate } from '../service/jouer-service';


export const SEND_DATE = "SEND_DATE";

export const sendDate = (date) => {
  return (dispatch) => {
    requestDate(date)
      .then((result)=>{
        dispatch(sendDateAction(result))
      });
  };
};

const sendDateAction = (value) => {
  return{
    type: SEND_DATE,
    tirage: value
  };
};
