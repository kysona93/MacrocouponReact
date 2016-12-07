import { GET_PRODUCT_CARD } from './../actions/home/index.js';

export default function (state=[],action){
    //console.log("Reducesr product get action ",action);
    switch(action.type){
        case GET_PRODUCT_CARD: 
           return action.payload.data // data is real data
    }
    return state;
    
}