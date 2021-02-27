import * as actions from 'src/constants/actions';
import { ActionCallbacks } from 'src/actionCreators/action';
import { IFillSampleActionPayload } from './sample';

export interface fetchSampleAction extends ActionCallbacks {
  type: typeof actions.SAMPLE_ACTION;
  payload: string;
}

export interface fillSampleAction extends ActionCallbacks {
  type: typeof actions.FILL_SAMPLE_ACTION;
  payload: IFillSampleActionPayload;
}
