import React from 'react';
import {Appearance} from 'react-native';
import {Provider} from 'react-redux';
import ThemeContext from './components/context/default';
import store from './redux/store';
import Routes from './routes/Routes';

const App: React.FC = () => {
  const isDarkTheme = Appearance.getColorScheme() === 'dark';
  return (
    <ThemeContext.Provider value={{isDarkTheme}}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
