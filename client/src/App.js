import React from 'react';
import Router from 'routes/index';
import Header from 'components/Header';
import { GlobalStyle } from 'styles/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => (
    <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Router />
    </BrowserRouter>
)
export default App