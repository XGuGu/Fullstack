import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const CLEAR_PIN_ERRORS = "CLEAR_PIN_ERRORS";

// export const receivePins = pins => ({
//   type: RECEIVE_PINS,
//   pins
// });

export const receivePins = (pins) => ({
  type: RECEIVE_PINS,
  pins
});

export const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

export const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
});

export const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

export const clearPinErrors = () => ({
  type: CLEAR_PIN_ERRORS
});

export const requestAllPins = () => (dispatch) => {
  return PinAPIUtil.fetchAllPins().then(response => dispatch(receivePins(response)));
};

// export const requestUserPins = (userId) => (dispatch) => {
//   return PinAPIUtil.fetchAllPins(userId).then(response => dispatch(receivePins(response)));
// };

export const requestUserPins = (userId, description) => (dispatch) => {
  return PinAPIUtil.fetchAllPins(userId, description).then(response => {
    // debugger
    return dispatch(receivePins(response))
  }
  );
};

export const requestPin = (id) => (dispatch) => {
  // debugger
  return PinAPIUtil.fetchPin(id).then(response => dispatch(receivePin(response)));
};

export const createPin = (pin, board_id) => (dispatch) => {
  return PinAPIUtil.createPin(pin, board_id).then(response => dispatch(receivePin(response)));
};

export const updatePin = pin => (dispatch) => {
  return PinAPIUtil.updatePin(pin).then(response => dispatch(receivePin(response)));
};

export const deletePin = (id) => (dispatch) => {
  return PinAPIUtil.deletePin(id).then(() => dispatch(removePin(pinId)));
};
