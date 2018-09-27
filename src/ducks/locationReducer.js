// constants
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_LAT = "UPDATE_LAT";
const UPDATE_LNG = "UPDATE_LNG";
//action creators
export function handleChange(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateLat(num) {
  return {
    type: UPDATE_LAT,
    payload: num
  };
}

export function updateLng(num) {
  return {
    type: UPDATE_LNG,
    payload: num
  };
}

//initial state
const initialState = {
  address: "",
  lat: 0,
  lng: 0
};

//reducer
export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case UPDATE_LAT:
      return {
        ...state,
        lat: action.payload
      };
    case UPDATE_LNG:
      return {
        ...state,
        lng: action.payload
      };
    default:
      return state;
  }
}