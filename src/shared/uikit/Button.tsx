import React from 'react'

type Props = {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    children?: React.ReactNode,
}

const Button = ({ onClick, children }: Props) => {
    return (
        <button
            className='py-2 px-4 bg-yellow-500 rounded-lg text-lg font-bold'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;