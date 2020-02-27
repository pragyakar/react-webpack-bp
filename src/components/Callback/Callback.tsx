import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../../utils/auth';

const Callback: React.SFC<{}> = () => {
  useEffect(() => {
    const auth = async () => await Auth.handleAuthentication();
    console.log(auth);
    debugger;
    // this.props.history.replace('/');
  }, []);

  return <p>Loading...</p>;
};

export default withRouter(Callback);
