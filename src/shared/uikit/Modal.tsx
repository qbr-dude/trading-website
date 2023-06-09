import classNames from 'classnames';
import React, { useRef } from 'react';
import { useOutsideClick } from '../hooks';

type Props = {
    // ref: React.elementref,
    isActive: boolean,
    activeHandler: (val: boolean) => void,
    children: React.ReactNode,
}

const Modal = ({ isActive, activeHandler, children }: Props) => {
    const ref = useRef(null);
    useOutsideClick({ ref, callback: () => activeHandler(false) });
    return (
        <div className={classNames(
            'absolute top-0 left-0 w-screen h-screen bg-yellow-200 opacity-50 flex justify-center items-center',
            { 'hidden': !isActive }
        )}
        >
            <div className='w-fit h-fit' ref={ref}>
                {children}
            </div>
        </div>
    )
}

export default Modal;