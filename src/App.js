import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from "styled-components";
import { theme } from './styles/Colors';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <MainContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
