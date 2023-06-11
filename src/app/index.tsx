import React from 'react';
import { WSContext, useWebsocket } from '@/shared/api';
import IndexPage from '@/pages/IndexPage';
import './index.css';

const App = () => {
    const connector = useWebsocket();
    return (
        <WSContext.Provider value={connector}>
            <IndexPage />
        </WSContext.Provider>
    )
}

export default App;