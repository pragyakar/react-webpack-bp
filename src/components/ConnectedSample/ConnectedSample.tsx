import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from 'src/reducers/rootReducer';
import uuid from 'uuid/v4';

import { fillSampleAction } from 'src/actionCreators/sample/sample';
import List from './List';
import { Dispatch, bindActionCreators } from 'redux';

export const ConnectedSample: React.FC<{ initial: string; fillSampleAction: typeof fillSampleAction }> = props => {
  const handleAddNewSample = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.fillSampleAction({
      data: [
        {
          id: uuid(),
          value: `${event.timeStamp}`
        }
      ]
    });
  };
  return (
    <div>
      Connected Sample Component
      <p>{props.initial}</p>
      <button type="button" onClick={handleAddNewSample}>
        Add New{' '}
      </button>
      <List />
    </div>
  );
};

const mapStateToProps = ({ sample }: ReduxState) => ({ initial: sample.initial });
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fillSampleAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSample);
