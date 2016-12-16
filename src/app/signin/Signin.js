import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import axios from 'axios';
import { saveUserSocial } from './../actions/index.js';

export default class Signin extends Component{
    constructor(props){
        super(props);
        this.connectFacebook = this.connectFacebook.bind(this);
        // this.connectTweeter = this.connectTweeter.bind(this);
         this.connectGoogle = this.connectGoogle.bind(this);

        // // for google
        this.renderButton = this.renderButton.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCjto8ZrME8MCC1uAoCui0yGP3-vbQoCuo",
            authDomain: "macrocoupon-8304e.firebaseapp.com",
            databaseURL: "https://macrocoupon-8304e.firebaseio.com",
            storageBucket: "macrocoupon-8304e.appspot.com",
            messagingSenderId: "526305577021"
        };
        firebase.initializeApp(config);

        // Initialize Firebase for difflang
        // var config = {
        //     apiKey: "AIzaSyDZHTwDCMKAlP6w3OmSARd9fzsjI1iLC4g",
        //     authDomain: "difflang-3ee2f.firebaseapp.com",
        //     databaseURL: "https://difflang-3ee2f.firebaseio.com",
        //     storageBucket: "difflang-3ee2f.appspot.com",
        //     messagingSenderId: "358734159662"
        // };
        // firebase.initializeApp(config);

        // initailize facebook
        window.fbAsyncInit = function() {
            FB.init({
            appId      : '374568819547485',
            xfbml      : true,
            version    : 'v2.8'
            });
        };
    
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // initailize twitter
        // window.twttr = (function(d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0],
        //     t = window.twttr || {};
        //     if (d.getElementById(id)) return t;
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = "https://platform.twitter.com/widgets.js";
        //     fjs.parentNode.insertBefore(js, fjs);

        //     t._e = [];
        //     t.ready = function(f) {
        //         t._e.push(f);
        //     };

        //     return t;
        // }(document, "script", "twitter-wjs"));

    } // close constructor 

    connectFacebook(){
        FB.login(("/me",function (response) { 
                // response has status and authResponse (accessToken, expireIn, signRequest, userID)
                //console.log(JSON.stringify(response));
                 if(response.status === "connected"){            
                    if(response.authResponse){
                        FB.api("/me?fields=id,name,location,hometown,email,first_name,last_name","GET",function(response){ 
                            var struser=JSON.stringify(response);
                            var user=JSON.parse(struser);
                            //alert(obj.name); // get data from object json
                            console.log("facebook data:",user);
                            
                            // axios({
                            //     url: 'http://localhost:9000/api/v1/users/signup',
                            //     method: 'post',
                            //     headers: {
                            //         'Content-Type': 'application/json',
                            //         'Accept-Language': 'en',
                            //         'X-Api-Key': 'AbCdEfGhIjK1',
                            //     },
                            //     data: JSON.stringify({
                            //         'first_name': user.first_name,
                            //         'last_name': user.last_name,
                            //         'email': user.email
                            //     })
                            // })
                            // .then(function (response) {
                            //     console.log("response",response);
                            // })
                            // .catch(function (error) {
                            //     console.log("error",error);
                            // });

                        });
                    }
                }else{
                    alert("Opps! Cannot connect to Facebook");
                }
              }),null );    // {scope: 'public_profile'}                            
    }

    connectGoogle(){
        var user;
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });
        firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var userprofile = result.user;
         userprofile.providerData.forEach(function (profile) {
            var splitname=profile.displayName.split(" ");
            user={
                "first_name": splitname[0],
                "last_name": splitname[1],
                "email": profile.email
            }
            console.log("google data:",user);
            // axios({
            //     url: 'http://localhost:9000/api/v1/users/signup',
            //     method: 'post',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept-Language': 'en',
            //         'X-Api-Key': 'AbCdEfGhIjK1',
            //     },
            //     data: JSON.stringify({
            //         'first_name': user.first_name,
            //         'last_name': user.last_name,
            //         'email': user.email
            //     })
            // })
            // .then(function (response) {
            //     console.log("response",response);
            // })
            // .catch(function (error) {
            //     console.log("error",error);
            // });

            // console.log("Google data:");
            // console.log("Sign-in provider: "+profile.providerId);
            // console.log("  Provider-specific UID: "+profile.uid);
            // console.log("  Name: "+profile.displayName);
            // console.log("  Email: "+profile.email);
            // console.log("  Photo URL: "+profile.photoURL);        
        });
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });        

    }

    connectTweeter(){
        // initailize twitter
        window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"));

        twttr.widgets.load(
            document.getElementById("container")
        );
        // create follow macrocoupon 
        // twttr.widgets.createFollowButton(
        //     'KySona', // TwitterDev
        //     document.getElementById('container'),
        //     {
        //         size: 'large'
        //     }
        // );

        // create share button 
        //twttr.widgets.createShareButton('/', document.getElementById('container'),{ text: 'Hello World' });
    }

    // google sign in
    componentDidMount() {
       this.renderButton(); // initailize google button
    }
    // to create button sign up with gmail 
    renderButton() {
            gapi.signin2.render('signin-google', { //my-signin2
                'scope': 'profile email',
                'width': 180,
                'height': 35,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': this.onSuccess,
                'onfailure': this.onFailure
            });
    }
    // when user success with login gmail account 
    onSuccess(googleUser) {
        var profile=googleUser.getBasicProfile();
        //console.log("google data.",profile);
        // console.log("ID: "+ profile.getId());
        // console.log("Name: "+ profile.getName());
        // console.log("Email: "+ profile.getEmail());
        // console.log("Image: "+ profile.getImageUrl());
        var splitname=profile.getName().split(" ");
        var user={
            "first_name": splitname[0],
            "last_name": splitname[1],
            "email": profile.getEmail()
        }
        console.log("Google Data: ", JSON.stringify(user))
    }
    // when user are fail with login gmail account 
    onFailure(error) {
        console.log(error);
        alert("Oops! cannot connect to your Gmail.")
    }
    
    render(){
        return(
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                                <h3>Sign In with Social Network</h3><br/>
                                <Button bsStyle="primary" onClick={this.connectFacebook}><i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;Sign up with facebook</Button><br/><br/>
                                <Button bsStyle="danger" onClick={this.connectGoogle}><i className="fa fa-google-plus" aria-hidden="true"></i>&nbsp;Sign up with google+</Button><br/><br/>
                               <div id="signin-google"></div><br/> 
                                { /*<Button bsStyle="info" onClick={this.connectTweeter}><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Sign up with twitter</Button> */}
                                { /* <a href="https://api.twitter.com/oauth/authenticate?oauth_token=NPcudxy0yU5T3tBzho7iCotZ3cnetKwcTIRlX0iwRl0">Link</a> */}
                                { /* <div id="container"></div> */ }
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            
                        </Col>
                    </Row>
                </Grid>
            </div>
            
        )
    }

}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({saveUserSocial},dispatch);
// }

// export default connect(null,mapDispatchToProps)(Signin);