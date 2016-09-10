const initialState = {
  term: ''
};

export default function search ( state = initialState, action ) {

  switch ( action.type ) {

    case 'SET_SEARCH':
      return Object.assign({}, state, { term: action.term });

    default:
      return state;
  }
};
