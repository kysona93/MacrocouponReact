import { GET_BOOKS } from './../actions/index.js';

export default function (state=[],action){
    //console.log("reducesr book get action ",action);
    switch(action.type){
        case GET_BOOKS: 
           return action.payload.data // data is real data
            // return [
            //         action.payload.data,
            //         ...state 
            //         ]
    }
    return state;
    
}

// export default function(){
//     return [
//         { title: "Scala" },
//         { title: "java" },
//         { title: "C#" },
//         { title: "PHP" },
//     ]
// }