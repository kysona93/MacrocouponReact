
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './app/reducers';
import App from './app/components/app.js';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <App />
    </Provider>
    ,document.getElementById('app'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Signin from './app/signin/Signin.jsx';

// ReactDOM.render(<Signin/>,document.getElementById("app"));

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import ReduxPromise from 'redux-promise';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './app/reducers/index';
// import reducers from './app/reducers';
// import App from './app/components/app';

// //let store = createStore(rootReducer)
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render( 
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />  
//   </Provider>,
//   document.getElementById('app')
//)