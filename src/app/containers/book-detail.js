import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
    render(){
        if(!this.props.book){
            return(
                <div>Please select book</div>
            )
        }
        return(
            <div>Book detail: {this.props.book.title}</div>
        )
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);