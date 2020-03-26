import React from 'react';

import { shallow } from 'src/enzyme';
import { List } from './List';

describe('List', () => {
  const list = shallow(
    <List
      data={[
        { id: '1', value: 'test-1' },
        { id: '2', value: 'test-2' },
        { id: '3', value: 'test-3' }
      ]}
    />
  );
  it('should render', () => {
    expect(list.find('.sample-list')).toHaveLength(1);
  });
  it('should render three list elements', () => {
    expect(list.find('li')).toHaveLength(3);
  });
});
