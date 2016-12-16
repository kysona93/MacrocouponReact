import React from 'react';
import { Navbar, FormGroup, FormControl, Form, ControlLabel, Button } from 'react-bootstrap';

export default class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showed: true
        }
        this.hideBox = this.hideBox.bind(this)
        this.showBox = this.showBox.bind(this);
    }

    hideBox(){
        this.setState({showed: false})
    }
    showBox(){
        alert("click")
         this.setState({showed: true})
    }
    render(){
        return(
            <div>
                <Navbar onClick={this.hideBox}>
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" placeholder="location" />
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="formInlineEmail">
                            <FormControl type="text" placeholder="product name" />
                        </FormGroup>
                        {' '}
                        <Button type="submit"> Search </Button>
                    </Form>  
                </Navbar>
            </div>
        )
    }
}