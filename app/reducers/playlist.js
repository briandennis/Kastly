const initialState = {
  isFetching: false,
  playlists: [],
  error: ''
};

export default function user( state = initialState, action ) {

  switch ( action.type ) {

    case 'FETCH_PLAYLISTS':

      return Object.assign({}, state, { isFetching: true });

    case 'FETCH_PLAYLISTS_SUCCESS':

      return Object.assign({}, state, {
        isFetching: false,
        playlists: action.playlists,
        error: ''
      });

    case 'FETCH_PLAYLIST_FAILURE':

      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });

    default:

      return state;
  }
};
