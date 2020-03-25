import { runSaga } from 'redux-saga';
import * as sampleEffects from './effects';
import * as sampleActions from 'src/actionCreators/sample/sample';
import { SampleActionType } from 'src/reducers/sample/sample.d';
import * as sampleApis from './apis';
import axios from 'src/utils/axios';

describe('test sample saga', () => {
  it('fetch sample effect should works', async () => {
    const dispatched: SampleActionType[] = [];
    const expectedResponse = {
      message: 'success'
    };
    const resolve = jest.fn();
    const fetchSampleAPI = jest.spyOn(sampleApis, 'fetchSampleAPI').mockResolvedValueOnce(expectedResponse);
    const callableFetchSampleAction = sampleActions.fetchSampleAction('test', resolve);

    await runSaga(
      {
        dispatch: (action: SampleActionType) => dispatched.push(action),
        getState: jest.fn()
      },
      sampleEffects.fetchSampleEffect,
      callableFetchSampleAction
    ).toPromise();

    expect(fetchSampleAPI).toBeCalledTimes(1);
    expect(dispatched).toStrictEqual([sampleActions.fillSampleAction({ data: [expectedResponse] })]);
    expect(resolve).toBeCalledTimes(1);
    expect(resolve).toBeCalledWith(expectedResponse);
  });

  it('fetch sample effect should handle error', async () => {
    const dispatched: SampleActionType[] = [];
    const expectedErrorResponse = {
      message: 'something went wrong'
    };
    const fetchSampleAPI = jest.spyOn(sampleApis, 'fetchSampleAPI').mockRejectedValueOnce(expectedErrorResponse);
    const resolve = jest.fn();
    const reject = jest.fn();
    const callableFetchSampleAction = sampleActions.fetchSampleAction('test', resolve, reject);

    await runSaga(
      {
        dispatch: (action: SampleActionType) => dispatched.push(action),
        getState: jest.fn()
      },
      sampleEffects.fetchSampleEffect,
      callableFetchSampleAction
    ).toPromise();

    expect(fetchSampleAPI).toBeCalledTimes(1);
    expect(reject).toBeCalledTimes(1);
    expect(reject).toBeCalledWith(expectedErrorResponse);
  });

  it('fetchSample api should work', async () => {
    const getLocationList = jest.spyOn(axios, 'get').mockResolvedValueOnce({});
    const fetchSamplePayload = 'test';
    await sampleApis.fetchSampleAPI(fetchSamplePayload);
    expect(getLocationList).toHaveBeenCalledWith('/sample/api', { params: fetchSamplePayload });
  });
});
