import classNames from 'classnames'
import React from 'react'

type Props = {
    name: string,
    selected: string,
    onChange: (value: any) => void,
    options: string[],
    textAlign?: 'center' | 'left',
}

const Select = ({ name, selected, onChange, options, textAlign }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }
    return (
        <select
            className={classNames(
                ' w-full p-1 text-2xl',
                { 'text-left': !textAlign || textAlign === 'left' },
                { 'text-center': textAlign === 'center' },
            )}
            name={name}
            id={name}
            value={selected}
            onChange={handleChange}
        >
            {options.map(option => <option value={option} key={option}>{option}</option>)}
        </select >
    )
}

export default Select;