import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const InitialState = {
  user: {},
  token: false,
  releaseTime: false,
  showTimer: true,
  cardsAvailability: true
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_RELEASE_TIME: "SET_RELEASE_TIME",
  SET_TIMER_STATUS: "SET_TIMER_STATUS",
  SET_CARDS_AVAILABILITY: "SET_CARDS_AVAILABILITY"
};

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    case actionTypes.SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    case actionTypes.SET_RELEASE_TIME:
      return Object.assign({}, state, {
        releaseTime: action.releaseTime
      });
    case actionTypes.SET_TIMER_STATUS:
      return Object.assign({}, state, {
        showTimer: action.showTimer
      });

    case actionTypes.SET_CARDS_AVAILABILITY:
      return Object.assign({}, state, {
        cardsAvailability: action.setCardsAvailability
      });
    default:
      return state;
  }
};

export const setUser = user => dispatch => {
  return dispatch({
    type: actionTypes.SET_USER,
    user: user
  });
};

export const setToken = token => dispatch => {
  return dispatch({
    type: actionTypes.SET_TOKEN,
    token: token
  });
};

export const setReleaseTime = releaseTime => dispatch => {
  return dispatch({
    type: actionTypes.SET_RELEASE_TIME,
    releaseTime: releaseTime
  });
};

export const setTimerStatus = status => dispatch => {
  return dispatch({
    type: actionTypes.SET_TIMER_STATUS,
    showTimer: status
  });
};

export const setCardsAvailability = status => dispatch => {
  return dispatch({
    type: actionTypes.SET_CARDS_AVAILABILITY,
    setCardsAvailability: status
  });
};

export function initializeStore(initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
