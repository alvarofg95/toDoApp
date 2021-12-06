import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducer';
import Routes from './routes/Routes';

const store = createStore(reducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
