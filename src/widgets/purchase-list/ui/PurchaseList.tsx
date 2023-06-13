import React, { memo } from 'react'
import Purchase from '@/entities/purchase';
import { useFeedback } from '../model';
import { useSubscribeMarketData } from '../model/subscribe';
import { useAppSelector } from '@/app/store';
import { selectQuotes } from '@/app/store/market-data';
import { Instrument } from '@/shared/api';

const PurchaseList = () => {
    const quotes = useAppSelector(selectQuotes);
    useFeedback();
    useSubscribeMarketData({ instrument: 'EUR_RUB' });
    return (
        <table className='w-full'>
            <thead>
                <tr>{[
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
                {Object.keys(quotes).map(
                    instrument => quotes[instrument as Instrument].map(
                        quote => // Пропсы взяты для примера
                            <Purchase
                                id={quote.bid}
                                amount={1}
                                instrument={instrument as Instrument}
                                price={1}
                                side='Sell'
                                status='Active'
                                key={quote.bid}
                            />)
                )}
            </tbody>
        </table>
    )
}

export default memo(PurchaseList);