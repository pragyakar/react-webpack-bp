import * as actions from 'src/constants/actions';
import * as SampleActions from 'src/actionCreators/sample/sample.d';

export function fetchSampleAction(
  payload: string,
  resolve?: Function,
  reject?: Function
): SampleActions.fetchSampleAction {
  return {
    type: actions.SAMPLE_ACTION,
    payload,
    resolve,
    reject
  };
}
