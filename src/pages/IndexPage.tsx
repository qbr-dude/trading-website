import React from 'react';
import PurchaseList from '@/widgets/purchase-list/';
import Button from '@/shared/uikit/Button';
import Ticker from '@/widgets/ticker';
import Modal from '@/shared/uikit/Modal';
import { open } from '@/app/store/modal';
import { useAppDispatch } from '@/app/store';
import PopUp from '@/shared/uikit/PopUp';

type Props = {}

const IndexPage = (props: Props) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className='p-2'>
                <Button onClick={() => dispatch(open())}>Open ticker</Button>
            </div>
            <PurchaseList />
            <Modal>
                <Ticker />
            </Modal>
            <PopUp />
        </>
    )
}

export default IndexPage;