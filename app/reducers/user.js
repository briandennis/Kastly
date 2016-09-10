const initialState = {
  isFetching: false,
  user: null,
  error: ''
};

export default function user( state = initialState, action ) {

  switch ( action.type ) {

    case 'FETCH_USER':

      return Object.assign({}, state, { isFetching: true });

    case 'FETCH_USER_SUCCESS':

      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        error: ''
      });

    case 'FETCH_USER_FAILURE':

      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });

    default:

      return state;
  }
};
