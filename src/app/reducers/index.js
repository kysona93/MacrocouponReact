import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import UserSocialReducer from './reducer_usersocial';
import ProductCardReducer from './reducer_product_card';
import MoreProductReducer from './reducer_products';
//import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    usersocail: UserSocialReducer,
    productcard: ProductCardReducer,
    moreproducts: MoreProductReducer
    //activeBook: ActiveBook
})

export default rootReducer;