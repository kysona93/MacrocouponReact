import React from 'react';
import { Component } from 'react';

import SearchBar from './../containers/search_bar.js';
import BookList from './../containers/book-list.js';
import Signin from './../signin/Signin.js'; 
import ProductCardList from './../containers/shared/display_product.js';

export default class App extends Component{
    render(){
        return(
            <div> 
                <ProductCardList />
                { /* <Signin />
                    <SearchBar />
                    <BookList />
                */}
            </div>
        )
    }
}

// import React from 'react';
// import BookList from './../containers/book-list';
// import BookDetail from './../containers/book-detail';

// export default class App extends React.Component {
//     render(){
//         return(
//             <div>
//                 <BookList />
//             </div>
//         )
//     }
// }