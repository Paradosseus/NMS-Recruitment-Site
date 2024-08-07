import React from 'react'

const Button = ({label = 'button', bgColor = 'bg-custom-red', textColor = 'text-custom-content-color', textSize = 'text-base', onClick}) => {
    return(
        <button className={`btn ${bgColor} ${textColor} ${textSize} border-none`}
        onClick={onClick}>{label}</button>
    )
}

export default Button; 