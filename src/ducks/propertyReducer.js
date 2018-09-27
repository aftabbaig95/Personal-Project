import axios from "axios";

//constants 
const GET_PROPERTIES = 'GET_PROPERTIES'


//Action Creator 
export function getFeatured() {
    // console.log('hit'); 
    return {
      type: GET_PROPERTIES,
      payload: axios.get("/api/listings")
    };
  }


//Initial State 
const initialState = { 
    featured: [], 
    isLoading: false

}


//reducer 

export default function propertyReducer (state = initialState, action){
    switch (action.type){
        case `${GET_PROPERTIES}_PENDING`:
            return {
                ...state, 
                isLoading: true
            };
    
        case `${GET_PROPERTIES}_FULFILLED`:
            console.log(action.payload.data)
            return{ 
                ...state, 
                featured: action.payload.data
            }; 
        default: 
            return state;

    }
}