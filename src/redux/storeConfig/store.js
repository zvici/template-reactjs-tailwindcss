// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

// ** init middleware
const middleware = [thunk, createDebounce()]


// ** Create store
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
)

export { store }
