import React from 'react';
import { Navbar, FormGroup, FormControl, Form, ControlLabel, Button } from 'react-bootstrap';

export default class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.searchLocation = this.searchLocation.bind(this);
        this.searchName = this.searchName.bind(this);
    }

    searchLocation(){
        alert("location request to server");
    }
    searchName(){
        alert("name request to server");
    }
    render(){
        return(
            <div>
                <Navbar >
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" placeholder="location" onChange={this.searchLocation} />
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="formInlineEmail">
                            <FormControl type="text" placeholder="product name" onChange={this.searchName} />
                        </FormGroup>
                        {' '}
                        <Button type="submit"> Search </Button>
                    </Form>  
                </Navbar>
            </div>
        )
    }
}