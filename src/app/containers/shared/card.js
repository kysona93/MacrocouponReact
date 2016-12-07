import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

export default class ProductCard extends Component {
    render(){
        return(
            <a href="#" style={styles.non_underline}>
                <div style={styles.price}><h6 style={styles.h6}>Discount {this.props.discountPercentage}</h6></div>
                <Thumbnail src="./../../../asset/images/candy.jpg" alt="242x200">
                    <div style={styles.box}>
                    <h3 style={styles.h3}>{this.props.title} </h3>
                    <p style={styles.location}><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{this.props.location}</p>
                    <div style={styles.pos_price}>
                        <span style={styles.originalPrice} ><strike>{this.props.originalPrice}</strike></span>&nbsp;&nbsp;
                        <span style={styles.discountPrice}>$&nbsp;{this.props.discountPrice}</span>
                    </div>
                    </div>
                </Thumbnail>
                {/*<Thumbnail src="./../../../asset/images/candy.jpg" alt="242x200">
                    <div style={styles.box}>
                        <h1 style={styles.h1}>{this.props.title} </h1>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{this.props.location}</p>
                        <span style={{float:'right'}}>
                            <span style={styles.originalPrice}><strike>{this.props.originalPrice}</strike></span>&nbsp;&nbsp;
                            <span style={styles.discountPrice}>{this.props.discountPrice}</span>
                        </span>
                    </div>
                </Thumbnail> */}
            </a>
        )
    }
}

const styles={
    pos_price:{
        marginLeft:'50%',
        position:'absolute',
        bottom:'30px'
    },
    non_underline:{
        textDecoration: 'none'
    },
    box:{
        height:'157px'
    },
    Thumbnail:{
        padding: '5px',
        color: '#333',
        fontSize: '15px',
        fontFamily: 'cursive',
        background: 'rgb(238, 238, 238)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    h6:{
        top:'1px',
        color: 'white',
        fontFamily:'cursive',
        fontWeight: 'bold',
        fontSize: '17px',
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.53)',
        padding:' 5px 30px 8px 17px',
        marginLeft: '5px'
    },
    discountPrice:{
        color: 'green',
        //float: 'left',
        //lineHeight: 4,
        //background:' rgb(37, 30, 24)',
        //position:' absolute',
        //width:' 80%',
        //height:' 8%',
        fontSize:'18px',
        //textAlign: 'center',
        fontFamily: 'cursive'
    },
    originalPrice:{
        //float: 'right',
        fontFamily:'cursive',
        //lineHeight: 6,
        color:'red'
    },
    h3:{
        marginTop:'2px',
        //borderTop:'1px solid #1f71d6',
        //borderBottom:'1px solid #1f71d6',
        fontSize: '20px',
        //textAlign: 'center',
        //background:'rgb(255, 255, 255)',
        //padding:' 6px',
        color: '#424242',
        fontFamily:'cursive'
    },
    location:{
        color: '#757575'
    }

}