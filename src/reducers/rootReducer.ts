import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export interface ReduxState {}

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });

export default rootReducer;
