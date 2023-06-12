import React, { memo } from 'react';
import { Instrument, OrderSide, OrderStatus } from '@/shared/api';

type Props = {
    id: number,
    createAt?: Date,
    changeAt?: Date,
    status: OrderStatus,
    side: OrderSide,
    price: number,
    amount: number,
    instrument: Instrument,
}

const colorizedStatus = (status: OrderStatus) => {
    let classname = 'border py-2 text-center bg-gradient-to-bl from-transparent';
    if (status === 'Active') {
        classname += ' text-green-600 to-green-300';
    } else if (status === 'Cancelled') {
        classname += ' text-red-600  to-red-300';
    } else if (status === 'Filled') {
        classname += ' text-yellow-600  to-yellow-300';
    } else if (status === 'Rejected') {
        classname += ' text-orange-600  to-orange-300';
    }
    return <td className={classname}>{status}</td>
}

const colorizedBySide = (value: any, side: OrderSide) => { // TODO maybe also add gradient
    let classname = 'border py-2 text-center';
    if (side === 'Buy') {
        classname += ' text-green-600';
    } if (side === 'Sell') {
        classname += ' text-red-600';
    }
    return <td className={classname}>{value}</td>
}

const TablePurchase = ({ id, amount, instrument, price, side, status, changeAt, createAt }: Props) => {
    return (
        <tr>
            <td className='border py-2 text-center'>{id}</td>
            <td className='border py-2 text-center'>{createAt?.toLocaleString() || new Date().toLocaleString()}</td>
            <td className='border py-2 text-center'>{changeAt?.toLocaleString() || new Date().toLocaleString()}</td>
            {colorizedStatus(status)}
            {colorizedBySide(side, side)}
            {colorizedBySide(price, side)}
            {colorizedBySide(amount, side)}
            <td className='border py-2 text-center'>{instrument}</td>
        </tr>
    )
}

export default memo(TablePurchase);