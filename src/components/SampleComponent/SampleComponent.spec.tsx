import React from 'react';
import { shallow } from '../../enzyme';

import SampleComponent, { ISampleComponentProps } from './SampleComponent';

describe('Sample Component', () => {
  const testProps: ISampleComponentProps = {
    handleClick: jest.fn(),
    text: 'Some paragraph'
  };
  const sampleComponent = shallow(<SampleComponent {...testProps} />);

  it('renders without crashing', () => {
    expect(sampleComponent.find('.sample-container')).toHaveLength(1);
  });

  it('renders text provided by props', () => {
    expect(sampleComponent.find('.sample-paragraph').text()).toBe(testProps.text);
  });

  it('handle click action on button', () => {
    sampleComponent.find('.sample-button').simulate('click');
    expect(testProps.handleClick).toHaveBeenCalled();
  });
});
