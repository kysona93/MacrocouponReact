import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
    renderBooks(book){
        return(
            <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.cost}</td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.props.books.map( (book, k) => <tr key={k} ><td>{book.title}</td></tr>) } */}
                    {this.props.books.map(this.renderBooks) }
                </tbody>
            </table>
        )
    }
}


function mapStateToProps(state){
    return { books: state.books  }
}

export default connect(mapStateToProps)(BookList);

// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// //import { selectBook  } from './../actions/index';
// import * as actions from './../actions';

// class BookList extends React.Component {
//     componentWillMount(){
//         this.props.getBooks();
//     }

//     renderList(){
//         return this.props.books.map((book) =>{
//             return( 
//                 <div>
//                     <li key={ book.title }> { /* onClick={() => this.props.selectBook(book) } */ }
//                         book: { book.cost }
//                     </li>
//                 </div>
//             )     
//         });
//     }
//     render(){
//         return(
//             <div>Hello
//                 <ul>{this.renderList()}</ul>
//             </div>
//         )
//     }

// }

// // create books property for BookList and then map books state to books propery
// function mapStateToProps(state){
//     return{
//         books: state.books
//     }
// }

// // bind action creator selectBook to Booklist as a property value
// // function mapDispatchToProps(dispatch){
// //     return bindActionCreators({ selectBook: selectBook},dispatch);
// // }

// // connect both book property and action creator selectBook to BookList 
// export default connect(mapStateToProps, actions)(BookList);