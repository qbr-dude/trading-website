import mock from "./mock";
import PurchaseList from "../ui/PurchaseList";
import { screen } from "@testing-library/react";
import { render } from '@/shared/test-utils';

describe('Purchase List', () => {
    it('Корректно рисуется список квот', () => {
        render(<PurchaseList />, {
            preloadedState: {
                marketData: {
                    quotes: mock,
                }
            }
        });

        expect(screen.getByText(mock.EUR_RUB[0].bid)).toBeInTheDocument();
        expect(screen.getByText(mock.EUR_USD[0].bid)).toBeInTheDocument();
        expect(screen.getByText(mock.USD_RUB[0].bid)).toBeInTheDocument();
    })
})