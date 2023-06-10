import React from 'react';
import { WSContext } from './../shared/api';
import IndexPage from './../pages/IndexPage';
import './index.css';

const App = () => {
    return (
        <WSContext.Provider value={null}>
            <IndexPage />
        </WSContext.Provider>
    )
}

export default App;