import React from 'react';
import Router from 'routes/index';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { GlobalStyle } from 'styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
const App = () => (
    <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
    </BrowserRouter>
)
export default App