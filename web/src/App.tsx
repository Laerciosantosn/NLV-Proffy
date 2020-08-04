import React from 'react';

import GlobalStyles from './assets/styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
    </div>
  );
};

export default App;
