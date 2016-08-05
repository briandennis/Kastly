export function fetchingUser() {
  return { type: 'FETCH_USER' };
}

export function setUser( success, user, err ) {
  if ( success ) {
    return { type: 'FETCH_USER_SUCCESS', user };
  } else {
    return { type: 'FETCH_USER_FAILURE' };
  }
}
