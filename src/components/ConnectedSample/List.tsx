import * as React from 'react';
import { ISample } from 'src/actionCreators/sample/sample';
import { ReduxState } from 'src/reducers/rootReducer';
import { connect } from 'react-redux';

const List: React.FC<{ data: ISample[] }> = ({ data }) => {
  return (
    <ul>
      {data.map(sample => (
        <li key={sample.id}>{sample.value}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ sample: { data } }: ReduxState) => ({ data });

export default connect(mapStateToProps)(List);
