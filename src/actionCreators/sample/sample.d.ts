import * as actions from 'src/constants/actions';
import { ActionCallbacks } from 'src/actionCreators/action';

export interface fetchSampleAction extends ActionCallbacks {
  type: typeof actions.SAMPLE_ACTION;
  payload: string;
}
