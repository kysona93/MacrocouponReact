import axios from 'axios';
export const GET_BOOKS='GET_BOOK';
export const GET_USER_SOCIAL="GET_USER_SOCIAL";

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
    //console.log("user data from FB is called."+JSON.stringify(user));
    //console.log("saveUserSocial is called."+reqest);
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