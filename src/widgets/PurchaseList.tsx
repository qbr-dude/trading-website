import React from 'react'
import { Purchase } from '../entities/purchase';

type Props = {}

const PurchaseList = (props: Props) => {
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
                    ].map(head => <th className='border-2 border-black p-2'>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                <Purchase id={1} amount={1} instrument='some' price={1} side='Sell' status='Filled' />
            </tbody>
        </table>
    )
}

export default PurchaseList;