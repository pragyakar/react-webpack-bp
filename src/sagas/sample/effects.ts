import { call, put } from 'redux-saga/effects';

import * as sampleActions from 'src/actionCreators/sample/sample.d';
import * as sampelApis from './apis';
import { fillSampleAction } from 'src/actionCreators/sample/sample';

export function* fetchSampleEffect(action: sampleActions.fetchSampleAction) {
  try {
    const response = yield call(sampelApis.fetchSampleAPI, action.payload);
    yield put(fillSampleAction({ data: [response] }));
    if (action.resolve) {
      action.resolve(response);
    }
  } catch (error) {
    if (action.reject) {
      action.reject(error);
    }
  }
}
