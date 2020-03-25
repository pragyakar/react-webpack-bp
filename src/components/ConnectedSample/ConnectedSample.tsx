import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { ReduxState } from 'src/reducers/rootReducer';
import uuid from 'uuid/v4';

import { fillSampleAction } from 'src/actionCreators/sample/sample';
import List from './List';

const ConnectedSample: React.FC<{ initial: string }> = ({ initial }) => {
  const dispatch = useDispatch();
  const handleAddNewSample = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      fillSampleAction({
        data: [
          {
            id: uuid(),
            value: `${event.timeStamp}`
          }
        ]
      })
    );
  };
  return (
    <div>
      Connected Sample Component
      <p>{initial}</p>
      <button type="button" onClick={handleAddNewSample}>
        Add New{' '}
      </button>
      <List />
    </div>
  );
};

const mapStateToProps = ({ sample }: ReduxState) => ({ initial: sample.initial });

export default connect(mapStateToProps)(ConnectedSample);
