import { Instrument } from "../types/base";

export const instrumentToNumber = (instrument: Instrument) => {
    switch (instrument) {
        case 'EUR_RUB':
            return 0;
        case 'EUR_USD':
            return 1;
        case 'USD_RUB':
            return 2;

        default:
            throw new Error('Instrument must be type of `Instrument`');
    }
}