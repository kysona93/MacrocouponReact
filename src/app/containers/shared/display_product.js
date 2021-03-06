import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/home';
import ProductCard from './card.js';
import { Grid, Col, Row, Button } from 'react-bootstrap';

var Scroll  = require('react-scroll');
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class ProductCardList extends Component{
    constructor(props){
        super(props);
        this.state={
            limit: 8
        }
        this.scrollDownMore = this.scrollDownMore.bind(this);
        // to do auto scroll content
        $(document).scroll(() => {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                //alert("You reached botton");
                this.setState({limit: (this.state.limit+4)})
                this.props.geProducts(this.state.limit);
            }
        })
    }
    
    componentWillMount(){
        this.props.geProducts(this.state.limit);
    }
    // componentDidMount(){
    //     this.props.geProducts();
    // }
    scrollDownMore(){
        scroll.scrollToTop();
        //console.log("document height=",$(document).height());
    }
    renderProductCard(){
        //alert("render product card");
        return(
            <Grid>
                <Row>
                    { this.props.productcard.map((product, i) => 
                        <Col key={i} xs={12} sm={6} md={3} lg={3}>
                            <ProductCard 
                                discountPercentage={product.dis_per} 
                                title={product.product_name}
                                location={product.location}
                                discountPrice={product.dis_price}
                                originalPrice={product.ori_price}
                            />
                        </Col>) 
                    }
                </Row> 
            </Grid>
        )
    }
    render(){
        return(
            <div className="container">
               { this.renderProductCard() }
            </div>
        )
    }
}


function mapStateToProps(state){
    return { productcard: state.productcard,
             moreproducts: state.moreproducts
            }
}

export default connect(mapStateToProps, actions)(ProductCardList);