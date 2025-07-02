import React from 'react'

function ModalConfirm({
    isOpen = false,
    onClose,
    onConfirm,
    title = 'Xác nhận',
    message = 'Bạn có chắc chắn muốn thực hiện hành động này?',
    confirmText = 'Xác nhận',
    cancelText = 'Hủy',
    theme = 'light'
}) {
    // Nếu modal không mở thì không hiển thị gì
    if (!isOpen) {
        return null
    }

    // CSS styles cho theme
    const themeStyles = {
        light: {
            backgroundColor: 'white',
            color: '#333',
            border: '1px solid #ddd'
        },
        dark: {
            backgroundColor: '#333',
            color: 'white',
            border: '1px solid #666'
        }
    }

    // Styles cho overlay (nền tối phía sau modal)
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    }

    // Styles cho modal
    const modalStyle = {
        backgroundColor: themeStyles[theme].backgroundColor,
        color: themeStyles[theme].color,
        border: themeStyles[theme].border,
        borderRadius: '8px',
        padding: '20px',
        minWidth: '300px',
        maxWidth: '500px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }

    // Styles cho title
    const titleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: themeStyles[theme].color
    }

    // Styles cho message
    const messageStyle = {
        marginBottom: '20px',
        lineHeight: '1.5',
        color: themeStyles[theme].color
    }

    // Styles cho buttons container
    const buttonsStyle = {
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-end'
    }

    // Styles cho button
    const buttonStyle = {
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '14px'
    }

    // Styles cho confirm button
    const confirmButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#dc3545',
        color: 'white'
    }

    // Styles cho cancel button
    const cancelButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#6c757d',
        color: 'white'
    }

    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
                <h3 style={titleStyle}>{title}</h3>
                <p style={messageStyle}>{message}</p>
                <div style={buttonsStyle}>
                    <button
                        style={cancelButtonStyle}
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>
                    <button
                        style={confirmButtonStyle}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm 