import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './Containers/App'
import CreateUserContainer from './Containers/CreateUserContainer'

import todoApp from './reducers/'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(todoApp);

render( <Provider store={store}> 
          <Router history={createBrowserHistory()}>
            <Route path="/">
              <Route path="member">
                <IndexRoute component={App}/>
                <Route path="create" component={CreateUserContainer}/>
              </Route>
            </Route>
          </Router>
        </Provider>, document.getElementById('app'));
    

// render((
//   <Router history={createBrowserHistory()}>
//     <Route path="/" component={App}>
//       <Route path="member">
//         <IndexRoute component={Index}/>
//         <Route path="about" component={About}/>
//       </Route>
//     </Route>
//   </Router>
// ), document.getElementById('app'))

