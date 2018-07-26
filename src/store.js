// import { createStore } from 'redux';

// import reducer from './reducers';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

import TicTacToeReducer from './reducers/ticTacToeCombiner';
import { createStore } from 'redux';
let store = createStore(TicTacToeReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;