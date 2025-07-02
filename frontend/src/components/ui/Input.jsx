import React from 'react'

function Input({
    type = 'text',
    value = '',
    onChange,
    placeholder = '',
    label = '',
    required = false,
    disabled = false,
    theme = 'light',
    style = {}
}) {
    // CSS styles cho theme
    const themeStyles = {
        light: {
            backgroundColor: 'white',
            color: '#333',
            border: '1px solid #ddd',
            '&:focus': {
                borderColor: '#007bff',
                outline: 'none'
            }
        },
        dark: {
            backgroundColor: '#444',
            color: 'white',
            border: '1px solid #666',
            '&:focus': {
                borderColor: '#007bff',
                outline: 'none'
            }
        }
    }

    // Base styles cho input
    const inputStyle = {
        width: '100%',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '14px',
        transition: 'border-color 0.2s ease',
        ...themeStyles[theme],
        ...style
    }

    // Styles cho label
    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: theme === 'dark' ? 'white' : '#333'
    }

    return (
        <div style={{ marginBottom: '15px' }}>
            {label && (
                <label style={labelStyle}>
                    {label}
                    {required && <span style={{ color: 'red' }}> *</span>}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                style={{
                    ...inputStyle,
                    opacity: disabled ? 0.6 : 1,
                    cursor: disabled ? 'not-allowed' : 'text'
                }}
            />
        </div>
    )
}

export default Input 