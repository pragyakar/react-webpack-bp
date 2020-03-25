import * as React from 'react';
import SampleComponent from '../SampleComponent/SampleComponent';
import { connect } from 'react-redux';
import { ReduxState } from 'src/reducers/rootReducer';

const Dashboard: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <h3>Dashboard component</h3>
      <SampleComponent text={text} handleClick={() => alert(text)} />
    </>
  );
};

const mapStateToProps = ({ sample }: ReduxState) => ({ text: sample.initial });

export default connect(mapStateToProps)(Dashboard);
