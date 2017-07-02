import { SEND_DATE } from '../actions/jouer-actions';
import { SEND_OBJET_ARCHIVE, RESET_CHAMPS_ARCHIVER,CONTROLE_CHAMPS } from '../actions/archiver-actions';

const initialeState = {
  tirage: {
    precision: 0.0,
    numeros: [{numero:0},{numero:0},{numero:0},{numero:0},{numero:0}],
    etoiles: [{etoile:0},{etoile:0}]
  },
  archive: {
    message: "Archiver",
    hidden: true
  }
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


const archiverReducer = (state,action) => {
  switch (action.type){
    case SEND_OBJET_ARCHIVE:{
      return action.archive;
    }

    case RESET_CHAMPS_ARCHIVER:{
      return initialeState.archive;
    }

    case CONTROLE_CHAMPS:{
      let cptNumero = 0;
      let cptEtoile = 0;
      let i;
      let j;
      for(i=0; i<5; i++){
        if(action.objetArchive.numeros[i]>0 && action.objetArchive.numeros[i]<51){
          cptNumero++;
        }
      }
      for(j=0; j<2; j++){
        if(action.objetArchive.etoiles[j]>0 && action.objetArchive.etoiles[j]<13){
          cptEtoile++;
        }
      }

      if(cptEtoile===2 && cptNumero===5){
        return {message: state.archive.message, hidden: true};
      }else{
        return {message: state.archive.message, hidden: false};
      }
    }

    default:{
      return state.archive;
    }
  }
}
export default function(state = initialeState,action){
  return {
    tirage:jouerReducer(state,action),
    archive:archiverReducer(state,action)
  }
};
