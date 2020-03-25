import { runSaga } from 'redux-saga';
import * as sampleEffects from './effects';
import * as sampleActions from 'src/actionCreators/sample/sample';
import * as sampleApis from './apis';
import axios from 'src/utils/axios';

describe('test sample saga', () => {
  it('fetch sample effect should works', async () => {
    const dispatched = [];
    const expectedResponse = {
      message: 'success'
    };
    const fetchSampleAPI = jest.spyOn(sampleApis, 'fetchSampleAPI').mockResolvedValueOnce(expectedResponse);
    const callableFetchSampleAction = sampleActions.fetchSampleAction('test');

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: jest.fn()
      },
      sampleEffects.fetchSampleEffect,
      callableFetchSampleAction
    ).toPromise();

    expect(fetchSampleAPI).toBeCalledTimes(1);
  });

  it('fetchSample api should work', async () => {
    const getLocationList = jest.spyOn(axios, 'get').mockResolvedValueOnce({});
    const fetchSamplePayload = 'test';
    await sampleApis.fetchSampleAPI(fetchSamplePayload);
    expect(getLocationList).toHaveBeenCalledWith('/sample/api', { params: fetchSamplePayload });
  });
});
