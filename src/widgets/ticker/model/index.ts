import { useAppDispatch } from "@/app/store";
import { close } from "@/app/store/modal";
import { PlaceOrderEnvelope, WSContext, instrumentToNumber } from "@/shared/api";
import { useContext } from "react";

type PlaceOrderProps = Omit<PlaceOrderEnvelope['message'], 'side'>;

export const usePlaceOrder = ({ instrument, amount, price }: PlaceOrderProps) => {
    const dispatch = useAppDispatch();
    const connector = useContext(WSContext);

    const toBuy = () => {
        connector?.send({
            messageType: 'PlaceOrder',
            message: {
                instrument,
                amount,
                price,
                side: 'Buy',
            }
        });
        dispatch(close());
    };
    const toSell = () => {
        connector?.send({
            messageType: 'PlaceOrder',
            message: {
                instrument,
                amount,
                price,
                side: 'Sell',
            }
        });
        dispatch(close());
    };

    return [toBuy, toSell];
}
