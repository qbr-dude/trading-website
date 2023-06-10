import classNames from 'classnames'
import React from 'react'

type Props = {
    options: string[],
    textAlign?: 'center' | 'left',
}

const Select = ({ options, textAlign }: Props) => {
    return (
        <select
            className={classNames(
                ' w-full p-1 text-2xl',
                { 'text-left': !textAlign || textAlign === 'left' },
                { 'text-center': textAlign === 'center' },
            )}
            name="1"
            id="1"
        >
            {options.map(option => <option value={option}>{option}</option>)}
        </select >
    )
}

export default Select;