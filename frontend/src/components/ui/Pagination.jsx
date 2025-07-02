import React from 'react'

function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  theme = 'light'
}) {
  // Nếu chỉ có 1 trang thì không hiển thị pagination
  if (totalPages <= 1) {
    return null
  }

  
  const themeStyles = {
    light: {
      backgroundColor: 'white',
      color: '#333',
      border: '1px solid #ddd',
      hoverBackground: '#f8f9fa'
    },
    dark: {
      backgroundColor: '#333',
      color: 'white',
      border: '1px solid #666',
      hoverBackground: '#444'
    }
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    marginTop: '20px'
  }

  const buttonStyle = {
    padding: '8px 12px',
    border: themeStyles[theme].border,
    backgroundColor: themeStyles[theme].backgroundColor,
    color: themeStyles[theme].color,
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease'
  }

  // Styles cho button active (trang hiện tại)
  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
    border: '1px solid #007bff'
  }

  // Styles cho button disabled
  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: 'not-allowed'
  }

  // Tạo danh sách các trang để hiển thị
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5 

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        // Trang hiện tại ở đầu
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        // Trang hiện tại ở cuối
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // Trang hiện tại ở giữa
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div style={containerStyle}>
      {/* Nút Previous */}
      <button
        style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {/* Các nút số trang */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          style={
            page === '...'
              ? { ...buttonStyle, cursor: 'default' }
              : page === currentPage
                ? activeButtonStyle
                : buttonStyle
          }
          onClick={() => {
            if (page !== '...' && page !== currentPage) {
              onPageChange(page)
            }
          }}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      {/* Nút Next */}
      <button
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  )
}

export default Pagination 