import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import MktApp from './components/MktApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <StylesProvider createGenerateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MktApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}