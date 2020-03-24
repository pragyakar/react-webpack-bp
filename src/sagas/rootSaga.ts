import { all } from 'redux-saga/effects';

import sampleWatchers from 'src/sagas/sample/watchers';

export default function* rootSaga() {
  yield all([...sampleWatchers()]);
}
