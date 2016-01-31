import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserListContainer from './Containers/UserListContainer'
import CreateUserContainer from './Containers/CreateUserContainer'

import todoApp from './reducers/'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(todoApp);

import hist from './history'
render( <Provider store={store}> 
          <Router history={hist}>
            <Route path="/">
              <Route path="member">
                <IndexRoute component={UserListContainer}/>
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

