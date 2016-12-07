import { GET_USER_SOCIAL } from './../actions/index.js';

export default function (state=[],action){
    //console.log("reducesr user social get action ",action);
    switch(action.type){
        case GET_USER_SOCIAL: 
           return action.payload.data // data is real data
            // return [
            //         action.payload.data,
            //         ...state 
            //         ]
    }
    return state;
    
}