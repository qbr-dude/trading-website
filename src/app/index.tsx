import React, { useState } from 'react';
import PurchaseList from './../widgets/PurchaseList';
import Button from './../shared/uikit/Button';
import Ticker from './../widgets/Ticker';
import Modal from './../shared/uikit/Modal';
import './index.css';

type Props = {}

const App = (props: Props) => {
    const [isActiveTicker, setIsActiveTicker] = useState(false)
    return (
        <div>
            <div className='p-2'>
                <Button onClick={() => setIsActiveTicker(!isActiveTicker)}>Open ticker</Button>
            </div>
            <PurchaseList />
            <Modal isActive={isActiveTicker} activeHandler={setIsActiveTicker}>
                <Ticker isActive={isActiveTicker} />
            </Modal>
        </div>
    )
}

export default App;