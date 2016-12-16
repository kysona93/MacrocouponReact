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
        this.state={
            show_box: true
        }
        this.handleChildClick = this.handleChildClick.bind(this);
    }
     handleChildClick(){
         this.setState({show_box: false })
     }
    render(){
        return(
            <div> 
                 <Navigation />
                 { this.state.show_box ? <ItemBox /> : null }
                 <Display onClick={this.handleChildClick} />
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