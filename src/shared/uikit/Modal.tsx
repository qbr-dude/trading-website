import classNames from 'classnames';
import React, { useRef } from 'react';
import { useOutsideClick } from '../hooks';
import { selectIsActive, close } from '@/app/store/modal';
import { useAppDispatch, useAppSelector } from '@/app/store';

type Props = {
    children: React.ReactNode,
}

const Modal = ({ children }: Props) => {
    const isActive = useAppSelector(selectIsActive);
    const dispatch = useAppDispatch();
    const ref = useRef(null);
    useOutsideClick({ ref, callback: () => dispatch(close()) });
    return (
        <div className={classNames(
            'absolute top-0 left-0 w-screen h-screen bg-yellow-200 bg-opacity-50 flex justify-center items-center',
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