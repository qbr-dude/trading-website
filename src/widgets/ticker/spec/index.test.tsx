import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '@/shared/test-utils';
import Ticker from '../ui/Ticker';
import WSConnector from '@/shared/api/config/ws';
import { WSContext } from '@/shared/api';

jest.mock('@/shared/api/config/ws');

describe('Ticker', () => {
    describe('отправляется сообщение PlaceOrder на сервер при нажатии на кнопку', () => {
        it('Buy', () => {
            const wsmock = new WSConnector();
            render(<WSContext.Provider value={wsmock}><Ticker /></WSContext.Provider>, {
                preloadedState: {
                    modal: {
                        isActive: false,
                    }
                }
            });
            const buyButton = screen.getByText('Buy');
            fireEvent.click(buyButton);
            expect(wsmock.send).toBeCalledTimes(1);
        })
        it('Sell', () => {
            const wsmock = new WSConnector();
            render(<WSContext.Provider value={wsmock}><Ticker /></WSContext.Provider>, {
                preloadedState: {
                    modal: {
                        isActive: false,
                    }
                }
            });
            const sellButton = screen.getByText('Sell');
            fireEvent.click(sellButton);
            expect(wsmock.send).toBeCalledTimes(1);
        })
    })
})