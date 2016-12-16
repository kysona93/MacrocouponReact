import axios from 'axios';
export const GET_BOOKS='GET_BOOK';
export const GET_USER_SOCIAL="GET_USER_SOCIAL";
export const SEARCH_BY_NAME="SEARCH_BY_NAME";
export const SEARCH_BY_LOCATION = "SEARCH_BY_LOCATION"


export function searchByName(name){
    return {
        type: SEARCH_BY_NAME,
        payload: name
    }
}

export function searchByLocation(location){
    return {
        type: SEARCH_BY_LOCATION,
        payload: location
    }

}
export function getBooks(title){
    //const reqest = axios.get('http://localhost:8080/asset/mock-data/books.json');
    console.log("getBooks is called."+reqest); // request is object promise
    return {
        type : GET_BOOKS,
        payload : reqest
    }
}

// sign up user
export function saveUserSocial(user){
    const reqest = axios.get('http://localhost:8080/asset/mock-data/books.json');
    return {
        type: GET_USER_SOCIAL,
        paylaod: reqest
    }
}



// export function selectBook(book){
//     return {
//         type: 'BOOK_SELECTED',
//         payload: book
//     }
// }