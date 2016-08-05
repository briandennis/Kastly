const initialState = {
  isFetching: false,
  user: null,
  error: ''
};

export default function user( state = initialState, action ) {

  switch ( action.type ) {

    case 'FETCH_USER':

      return object.assign(state, { isFetching: true });

    case 'FETCH_USER_SUCCESS':

      return object.assign(state, {
        isFetching: false,
        user: action.user,
        error: ''
      });

    case 'FETCH_USER_FAILURE':

      return object.assign(state, {
        isFetching: false,
        error: action.error
      });

    case default:

      return state;
  }
};
