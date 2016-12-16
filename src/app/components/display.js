import React from 'react';

export default class Display extends React.Component {
    render(){
        return(
            <div className="container" style={{"backgroundColor":"gray"}}> 
                <h1 style={{"height":"500px"}}>Display Content is Here</h1>
            </div>
        )
    }
}