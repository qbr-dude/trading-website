import React, { memo } from 'react'
import Purchase from '@/entities/purchase';
import { useFeedback } from '../model';
import { useSubscribeMarketData } from '../model/subscribe';
import { useAppSelector } from '@/app/store';
import { selectQuotes } from '@/app/store/market-data';

const PurchaseList = () => {
    const quotes = useAppSelector(selectQuotes);
    useFeedback();
    useSubscribeMarketData({ instrument: 1 });
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
                {Object.values(quotes).map(
                    quote => quote.map(
                        _quote =>
                            <Purchase
                                id={_quote.bid}
                                amount={1}
                                instrument='EUR_RUB'
                                price={1}
                                side='Sell'
                                status='Filled'
                                key={_quote.bid}
                            />
                    ))}

            </tbody>
        </table>
    )
}

// TODO MEMO!
export default memo(PurchaseList);