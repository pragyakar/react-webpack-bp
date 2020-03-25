import { fetchSampleAction } from './sample';
import * as actions from 'src/constants/actions';

describe('test fetch sample creator', () => {
  it('fetch sample creator should return fetchSampleAction', () => {
    const payload = 'test-creator';
    const resolve = jest.fn();
    const reject = jest.fn();
    const action = fetchSampleAction(payload, resolve, reject);

    expect(action).toEqual({
      type: actions.SAMPLE_ACTION,
      payload,
      resolve,
      reject
    });
  });
});
