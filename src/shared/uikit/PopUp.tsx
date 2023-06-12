import { useAppSelector } from '@/app/store';
import { selectPopupIsActive, selectPopupMessage } from '@/app/store/pop-up';
import classNames from 'classnames';
import React from 'react'

const PopUp = () => {
    const isActive = useAppSelector(selectPopupIsActive);
    const message = useAppSelector(selectPopupMessage);
    return (
        <div className={classNames(
            'absolute top-5 right-5 max-w-xs max-h-24 w-full h-full bg-yellow-400 bg-opacity-30 rounded-sm p-3',
            { 'hidden': !isActive }
        )}>
            <div className='bg-yellow-400 h-full w-full p-2 rounded-sm'>
                {message}
            </div>
        </div>
    )
}

export default PopUp;