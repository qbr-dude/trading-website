import classNames from 'classnames';
import React from 'react'

type Props = {
    value: string,
    type?: 'text' | 'number',
    onChange: (val: string) => void,
    textAlign?: 'center' | 'left'
}

const Input = ({ type, value, textAlign, onChange }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return (
        <input
            type={type || 'text'}
            value={value}
            onChange={handleChange}
            className={classNames(
                'my-1 p-1 w-full h-full text-2xl rounded-sm',
                { 'text-left': !textAlign || textAlign === 'left' },
                { 'text-center': textAlign === 'center' },
            )}
        />
    )
}

export default Input;