import { ActionType } from '../action';
import { FILL_SAMPLE_ACTION } from 'src/constants/actions';
import { IFillSampleActionPayload } from 'src/actionCreators/sample/sample';

export interface ISampleReduxState {
  initial: string;
  data: {}[];
}

export type SampleActionType = ActionType<typeof FILL_SAMPLE_ACTION, IFillSampleActionPayload>;
