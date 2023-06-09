import React from 'react';
import PurchaseList from './../widgets/PurchaseList';
import './index.css';

type Props = {}

const App = (props: Props) => {
    return (
        <div>
            <div>
                some about purchase
            </div>
            <PurchaseList />
        </div>
    )
}

export default App;