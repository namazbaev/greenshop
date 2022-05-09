import React from 'react';
import { routeComponents } from './components';
import { Routes, Route } from 'react-router-dom';
const Router = () => {
    return (
        <Routes>
            {routeComponents.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
        </Routes>
    )
}
export default Router