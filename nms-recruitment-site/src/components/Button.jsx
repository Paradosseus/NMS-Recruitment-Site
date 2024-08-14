import React from 'react'

const Button = ({label = 'button', bgColor = 'bg-custom-red', textColor = 'text-custom-content-color', textSize = 'text-base', onClick, disabled="",width ="w-auto", height = "h-auto"}) => {
    return(
        <button className={`btn ${bgColor} ${textColor} ${textSize} ${width} ${height} border-none`}
        onClick={onClick} disabled={disabled}>{label}</button>
    )
}

export default Button; 