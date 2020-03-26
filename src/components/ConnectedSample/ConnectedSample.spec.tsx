import React from 'react';

import { shallow } from 'src/enzyme';
import { ConnectedSample } from './ConnectedSample';

describe('connected sample', () => {
  const initial = 'react-webpack-bp-test';
  const fillSampleAction = jest.fn();
  const connectedSample = shallow(<ConnectedSample initial={initial} fillSampleAction={fillSampleAction} />);
  it('should render', () => {
    expect(connectedSample.find('p').text()).toBe(initial);
  });
  it('should dispatch an action', () => {
    connectedSample.find('button').simulate('click', { timestamp: 123 });
    expect(fillSampleAction).toBeCalledTimes(1);
  });
});
