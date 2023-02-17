import React from 'react'
import "./input.scss"

export const Input = ({ placeholder,icon,...otherProps }) => {
    return (
        <div className='input'>
            <img src={icon} alt="icon"/>
            <input
                {...otherProps}
                placeholder={placeholder}
            />
        </div>

    )
}
