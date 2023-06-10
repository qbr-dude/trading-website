import classNames from 'classnames';
import React from 'react'

type Props = {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    children?: React.ReactNode,
    color?: 'yellow' | 'green' | 'red',
}

const Button = ({ onClick, color, children }: Props) => {
    return (
        <button
            className={classNames(
                'py-2 px-4 rounded-sm text-lg font-bold',
                { 'bg-yellow-500': !color || color === 'yellow' },
                { 'bg-red-500 text-white': color === 'red' },
                { 'bg-green-500 text-white': color === 'green' },
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;