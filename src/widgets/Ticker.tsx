import React from 'react'

type Props = {
    isActive: boolean,
}

const Ticker = ({ isActive }: Props) => {
    return (
        <div className='w-20 h-20 bg-yellow-400'>
            Ticker
        </div>
    )
}

export default Ticker;