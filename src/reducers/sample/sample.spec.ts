import { fillSampleAction } from 'src/actionCreators/sample/sample';
import sampleReducer from './sample';
import { SampleActionType } from './sample.d';

describe('sample reducer', () => {
  it('should return the initial state', () => {
    expect(sampleReducer(undefined, {} as SampleActionType)).toEqual({
      initial: 'react-webpack-bp',
      data: []
    });
  });

  it('should hanle fill Sample Action', () => {
    expect(
      sampleReducer(
        {
          initial: 'react-webpack-bp',
          data: []
        },
        fillSampleAction({ data: [{ id: 'test', value: 'success' }] })
      )
    ).toEqual({
      initial: 'react-webpack-bp',
      data: [{ id: 'test', value: 'success' }]
    });
  });
});
