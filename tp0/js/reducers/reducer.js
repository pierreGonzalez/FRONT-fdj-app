import { SEND_DATE } from '../actions/jouer-actions';
import { SEND_OBJET_ARCHIVE, RESET_CHAMPS_ARCHIVER,CONTROLE_CHAMPS } from '../actions/archiver-actions';
import { LISTE_TIRAGES } from '../actions/listeTirages-actions';
import { LOGIN, LOGOUT } from '../actions/login-actions';

const initialeState = {
  tirage: {
    precision: 0.0,
    numeros: [{numero:0},{numero:0},{numero:0},{numero:0},{numero:0}],
    etoiles: [{etoile:0},{etoile:0}]
  },
  archive: {
    message: "Archiver",
    hidden: false
  },
  listeTirages: [],
  basicToken: ""
};

const jouerReducer = (state,action) => {
  switch (action.type){
    case SEND_DATE:{
      return action.tirage;
    }
    default:{
      return state.tirage;
    }
  }
}

const listeTiragesReducer = (state,action) => {
  switch (action.type){
    case LISTE_TIRAGES:{
      return action.listeTirages;
    }
    default:{
      return state.listeTirages;
    }
  }
}

const loginReducer = (state,action) => {
  switch (action.type){
    case LOGIN:{
      return action.basicToken;
    }
    case LOGOUT:{
      return  initialeState.basicToken;
    }
    default:{
      return state.basicToken;
    }
  }
}

const archiverReducer = (state,action) => {
  switch (action.type){
    case SEND_OBJET_ARCHIVE:{
      return action.archive;
    }

    case RESET_CHAMPS_ARCHIVER:{
      return initialeState.archive;
    }

    default:{
      return state.archive;
    }
  }
}

export default function(state = initialeState,action){
  return {
    tirage: jouerReducer(state,action),
    archive: archiverReducer(state,action),
    listeTirages: listeTiragesReducer(state,action),
    basicToken: loginReducer(state,action)
  }
};
