import React from 'react'

function Button({
    buttonText,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`${className}`} {...props}>
        {buttonText}
    </button>
  )
}

export default Button