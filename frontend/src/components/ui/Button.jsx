import React from 'react'

function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style = {}
}) {
  // CSS styles cho các variant khác nhau
  const variantStyles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      border: '1px solid #007bff'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      border: '1px solid #6c757d'
    },
    success: {
      backgroundColor: '#28a745',
      color: 'white',
      border: '1px solid #28a745'
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
      border: '1px solid #dc3545'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#007bff',
      border: '1px solid #007bff'
    }
  }

  // CSS styles cho các size khác nhau
  const sizeStyles = {
    small: {
      padding: '5px 10px',
      fontSize: '12px'
    },
    medium: {
      padding: '8px 16px',
      fontSize: '14px'
    },
    large: {
      padding: '12px 24px',
      fontSize: '16px'
    }
  }

  // Kết hợp tất cả styles
  const buttonStyle = {
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
    opacity: disabled ? 0.6 : 1
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {children}
    </button>
  )
}

export default Button 