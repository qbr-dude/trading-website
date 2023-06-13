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

export const numberToInstrument = (number: number): Instrument => {
    switch (number) {
        case 0:
            return 'EUR_RUB';
        case 1:
            return 'EUR_USD';
        case 2:
            return 'USD_RUB';

        default:
            throw new Error('Number must be related to type `Instrument`');
    }
}