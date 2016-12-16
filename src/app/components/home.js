import React from 'react';
import { Component } from 'react';
import SearchBar from './../containers/search_bar.js';
import BookList from './../containers/book-list.js';
import Signin from './../signin/Signin.js'; 
import ProductCardList from './../containers/shared/display_product.js';
import Navigation from './navigation.js';
import ItemBox from './itembox.js';
import Display from './display.js';

export default class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div> 
                 <Navigation myFunc={this.navFunc}/>
                 <ItemBox />
                 <Display myFunc={this.disFunc} />
                { /* 
                    <Signin />
                    <ProductCardList />
                    <Signin />
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