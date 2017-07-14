import { requestTirages } from '../service/mongo-service';


export const LISTE_TIRAGES = "LISTE_TIRAGES";

export const loadMongo = (basicToken) => {
  return (dispatch) => {
    requestTirages(basicToken)
      .then((result)=>{
        dispatch(loadMongoAction(result))
      });
  };
};

const loadMongoAction = (value) => {
  return{
    type: LISTE_TIRAGES,
    listeTirages: value
  };
};
