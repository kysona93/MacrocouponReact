import React from 'react';

export default class ItemBox extends React.Component {
    constructor(props){
        super(props)
    }
 
    render(){
        return(
            <div style={{"backgroundColor":"pink"}}>
                { /* <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                    <li><a href="#">Item 6</a></li>
                    <li><a href="#">Item 7</a></li>
                    <li><a href="#">Item 8</a></li>
                    <li><a href="#">Item 9</a></li>
                    <li><a href="#">Item 10</a></li>
                </ul> */ }
            </div>
        )
    }

}