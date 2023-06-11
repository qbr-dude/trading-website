import React, { memo, useContext, useEffect } from 'react'
import Purchase from '@/entities/purchase';
import { WSContext } from '@/shared/api';
import { onerror, onreport, onsuccess, onupdate } from '../model';

type Props = {}

const PurchaseList = (props: Props) => {
    const first = useContext(WSContext);

    useEffect(() => {
        first?.setFeedback(
            onsuccess,
            onerror,
            onreport,
            onupdate
        )
    }, []);

    return (
        <table className='w-full'>
            <thead>
                <tr>
                    {[
                        'Id',
                        'Creation time',
                        'Change time',
                        'Status', 'Side',
                        'Price', 'Amount',
                        'Instrument'
                    ].map(head => <th className='border-2 border-black p-2' key={head}>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                <Purchase id={1} amount={1} instrument='EUR_RUB' price={1} side='Sell' status='Filled' />
            </tbody>
        </table>
    )
}

// TODO MEMO!
export default memo(PurchaseList);