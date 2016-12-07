import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';

import { getBooks } from './../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={
            term: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    inputChange(event){
        //console.log(event.target.value);
        this.setState({term: event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.getBooks(this.state.term); // call action getBooks
        this.setState({term: ''})
    }
    render(){
        return(
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input 
                        placeholder="type book title"
                        className= "form-control"
                        value={this.state.term} 
                        onChange={this.inputChange}
                    />
                    <span className="input-group-button">
                        <button type="submit" className="btn btn-secondary ">Search</button>
                    </span>
                </form>          
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBooks},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);