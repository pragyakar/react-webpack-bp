import * as React from 'react';

import Auth from 'src/utils/auth';

const Login = () => {
  return (
    <>
      <button onClick={() => Auth.login()}>Login</button>
    </>
  );
};

export default Login;
