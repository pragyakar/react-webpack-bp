import * as React from 'react';
import { Provider } from 'react-redux';

import store from 'src/store';
import Router from 'src/Router';

const App: React.FC<{}> = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
