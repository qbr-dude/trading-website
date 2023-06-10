import React, { useState } from 'react';
import PurchaseList from '../widgets/purchase-list/';
import Button from './../shared/uikit/Button';
import Ticker from './../widgets/ticker';
import Modal from './../shared/uikit/Modal';

type Props = {}

const IndexPage = (props: Props) => {
    const [isActiveTicker, setIsActiveTicker] = useState(false)
    return (
        <>
            <div className='p-2'>
                <Button onClick={() => setIsActiveTicker(!isActiveTicker)}>Open ticker</Button>
            </div>
            <PurchaseList />
            <Modal isActive={isActiveTicker} activeHandler={setIsActiveTicker}>
                <Ticker isActive={isActiveTicker} />
            </Modal>
        </>
    )
}

export default IndexPage;