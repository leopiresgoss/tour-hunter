export const GET_SIGNIN_STATUS = 'TourHunter/sign_up/GET_SIGNIN_STATUS';

export default function usersReducer(state = 'Not signed in', action) {
  switch (action.type) {
    case GET_SIGNIN_STATUS: {
      return action.signedIn;
    }
    default:
      return state;
  }
}

export function updateSignedInStatus(signedIn) {
  return { type: GET_SIGNIN_STATUS, signedIn };
}
