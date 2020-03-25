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

export interface IFillSampleActionPayload {
  data: {}[];
}

export function fillSampleAction(payload: IFillSampleActionPayload): SampleActions.fillSampleAction {
  return {
    type: actions.FILL_SAMPLE_ACTION,
    payload
  };
}
