import React, { useRef, useEffect } from 'react';

type Props = {
    ref: React.RefObject<HTMLElement>,
    callback: () => void,
}

export const useOutsideClick = ({ ref, callback }: Props) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
                callback();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [ref]);
}