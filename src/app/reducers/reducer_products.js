import { GET_PRODUCT_MORE } from './../actions/home/index.js';

export default function (state=[],action){
    console.log("Reducesr product more get action ",action);
    switch(action.type){
        case GET_PRODUCT_MORE: 
           return action.payload.data // data is real data
    }
    return state;
    
}