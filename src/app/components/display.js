import React from 'react';

export default class Display extends React.Component {
    constructor(props){
        super(props)
    }

    render(){ 
        return(
            <div onClick={this.props.onClick} className="container" style={{"backgroundColor":"gray"}}> 
                <h1 style={{"height":"500px"}}>Display Content is Here</h1>
            </div>
        )
    }
}