export function fetchingUser() {
  return { type: 'FETCH_USER' };
}

export function setUser(success, user, error) {
  if ( success ) {
    return {
      type: 'FETCH_USER_SUCCESS',
      user: Object.assign({}, user, { id: user._id })
    };
  } else {
    return {
      type: 'FETCH_USER_FAILURE',
      error
    };
  }
}

export function fetchingPlaylists() {
  return { type: 'FETCH_PLAYLIST' };
}

export function setPlaylists(success, playlists, error) {
  if (success) {
    return {
      type: 'FETCH_PLAYLISTS_SUCCESS',
      playlists
    };
  } else {
    return {
      type: 'FETCH_PLAYLISTS_ERROR',
      error
    };
  }
}
