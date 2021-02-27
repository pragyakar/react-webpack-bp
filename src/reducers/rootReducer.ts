import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { ISampleReduxState } from './sample/sample.d';
import sampleReducer from './sample/sample';

export interface ReduxState {
  sample: ISampleReduxState;
}

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    sample: sampleReducer
  });

export default rootReducer;
