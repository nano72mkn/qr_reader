import React from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { Main } from './page/Main';
import { theme } from './styles/theme';

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <Main />
    </StylesProvider>
  </MuiThemeProvider>
);

export default App;
