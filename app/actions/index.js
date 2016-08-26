export function fetchingUser() {
  return { type: 'FETCH_USER' };
}

export function setUser( success, user, err ) {
  if ( success ) {
    return {
      type: 'FETCH_USER_SUCCESS',
      user: Object.assign({}, user, { id: user._id })
    };
  } else {
    return { type: 'FETCH_USER_FAILURE' };
  }
}
