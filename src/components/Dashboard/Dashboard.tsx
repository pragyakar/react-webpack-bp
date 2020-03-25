import * as React from 'react';
import SampleComponent from 'src/components/SampleComponent/SampleComponent';
import ConnectedSample from 'src/components/ConnectedSample/ConnectedSample';

const Dashboard: React.FC<{}> = () => {
  return (
    <>
      <h2>Dashboard component</h2>
      <SampleComponent text={'Sample Component'} handleClick={() => alert('Sample Component')} />
      <ConnectedSample />
    </>
  );
};

export default Dashboard;
