import { takeEvery } from 'redux-saga/effects';

import * as actions from 'src/constants/actions';
import * as effects from 'src/sagas/sample/effects';

function* fetchSampleWatcher() {
  yield takeEvery(actions.SAMPLE_ACTION, effects.fetchSampleEffect);
}

export default function SampleWatchers() {
  return [fetchSampleWatcher()];
}
