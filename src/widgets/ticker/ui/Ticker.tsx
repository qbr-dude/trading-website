import React, { useState } from 'react'
import Button from '@/shared/uikit/Button';
import Input from '@/shared/uikit/Input';
import Select from '@/shared/uikit/Select';
import { usePlaceOrder } from '../model';
import { Instrument } from '@/shared/api';

type Props = {
    isActive: boolean,
}

const Ticker = ({ isActive }: Props) => {
    const [instrument, setInstrument] = useState<Instrument>('USD_RUB');
    const [amount, setAmount] = useState('0');
    const [price, setPrice] = useState('0');

    const [sendToBuy, sendToSell] = usePlaceOrder({
        instrument,
        amount: parseInt(amount),
        price: parseInt(price),
    })

    return (
        <div className='flex flex-col p-10 bg-yellow-400'>
            <div className='my-2 w-full'>
                <Select
                    name='instrument'
                    selected={instrument}
                    options={['EUR_RUB', 'EUR_USD', 'USD_RUB']}
                    onChange={setInstrument}
                    textAlign='center'
                />
            </div>
            <div className='my-2 w-full'>
                <Input
                    type='number'
                    value={amount}
                    textAlign='center'
                    onChange={(val) => setAmount(val)}
                />
            </div>
            <div className='flex mt-2'>
                <div className='flex flex-col flex-1'>
                    <span className='text-center text-3xl font-bold mb-6'>8.558</span>
                    <Button color='red' onClick={sendToSell}>Sell</Button>
                </div>
                <div className='border mx-5' />
                <div className='flex flex-col flex-1'>
                    <span className='text-center text-3xl font-bold mb-6'>8.558</span>
                    <Button color='green' onClick={sendToBuy}>Buy</Button>
                </div>
            </div>
        </div>
    )
}

export default Ticker;