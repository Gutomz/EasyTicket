import { createStore } from 'redux';

const INITIAL_STATE = {
  locale: 'Campinas'
}

function reducer(state = INITIAL_STATE, action){
  if(action.type === 'CHANGE_LOCALE'){
    return { ...state, locale: action.locale }
  }
  return state;
}

const store = createStore(reducer);

export default store;