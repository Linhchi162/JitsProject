import { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Products from './Products'
import AddProduct from './AddProduct'
import About from './About'
import Button from './ui/Button'
import Input from './ui/Input'
import ModalConfirm from './ui/ModalConfirm'

function Day9() {
    const [theme, setTheme] = useState('light')
    const [showModal, setShowModal] = useState(false)
    const [lastAccessTime, setLastAccessTime] = useState('')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        }

        // Lưu thời gian truy cập gần nhất
        const now = new Date().toLocaleString('vi-VN')
        localStorage.setItem('lastAccessTime', now)
        sessionStorage.setItem('lastAccessTime', now)
        document.cookie = `lastAccessTime=${now}; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; path=/`
        setLastAccessTime(now)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    const themeStyles = {
        light: {
            backgroundColor: '#ffffff',
            color: '#333333',
            borderColor: '#dddddd'
        },
        dark: {
            backgroundColor: '#333333',
            color: '#ffffff',
            borderColor: '#666666'
        }
    }

    const currentStyle = themeStyles[theme]

    return (
        <Router>
            <div style={{
                minHeight: '100vh',
                backgroundColor: currentStyle.backgroundColor,
                color: currentStyle.color,
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <header style={{
                    padding: '20px',
                    borderBottom: `1px solid ${currentStyle.borderColor}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h1>Buổi 9: localStorage, sessionStorage, Cookie</h1>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Button
                            variant="primary"
                            size="small"
                            onClick={() => setShowModal(true)}
                        >
                            Demo Modal
                        </Button>
                        <Button
                            onClick={toggleTheme}
                            variant={theme === 'light' ? 'secondary' : 'outline'}
                            size="small"
                        >
                            {theme === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                    </div>
                </header>

                {/* Navigation */}
                <nav style={{
                    padding: '20px',
                    borderBottom: `1px solid ${currentStyle.borderColor}`
                }}>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        gap: '20px'
                    }}>
                        <li>
                            <Link to="/products" style={{
                                color: currentStyle.color,
                                textDecoration: 'none',
                                padding: '8px 16px',
                                border: `1px solid ${currentStyle.borderColor}`,
                                borderRadius: '4px'
                            }}>
                                Danh sách sản phẩm
                            </Link>
                        </li>
                        <li>
                            <Link to="/add" style={{
                                color: currentStyle.color,
                                textDecoration: 'none',
                                padding: '8px 16px',
                                border: `1px solid ${currentStyle.borderColor}`,
                                borderRadius: '4px'
                            }}>
                                Thêm sản phẩm
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{
                                color: currentStyle.color,
                                textDecoration: 'none',
                                padding: '8px 16px',
                                border: `1px solid ${currentStyle.borderColor}`,
                                borderRadius: '4px'
                            }}>
                                Giới thiệu
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main style={{ padding: '20px', flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/products" replace />} />
                        <Route path="/products" element={<Products theme={theme} />} />
                        <Route path="/add" element={<AddProduct theme={theme} />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>

                <footer style={{
                    padding: '15px 20px',
                    borderTop: `1px solid ${currentStyle.borderColor}`,
                    backgroundColor: theme === 'light' ? '#f8f9fa' : '#2c2c2c',
                    textAlign: 'center',
                    fontSize: '14px'
                }}>
                    <p style={{ margin: 0 }}>
                        Thời gian truy cập gần nhất: {lastAccessTime}
                    </p>
                </footer>

                <ModalConfirm
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onConfirm={() => {
                        alert('Modal confirmed!')
                        setShowModal(false)
                    }}
                    title="Demo Modal"
                    message="Đây là demo của ModalConfirm component với theme support"
                    confirmText="OK"
                    cancelText="Cancel"
                    theme={theme}
                />
            </div>
        </Router>
    )
}

export default Day9 