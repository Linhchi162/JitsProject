import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Products from './Products'
import AddProduct from './AddProduct'
import About from './About'

function Lesson7() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        }
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
                transition: 'all 0.3s ease'
            }}>
                <header style={{
                    padding: '20px',
                    borderBottom: `1px solid ${currentStyle.borderColor}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h1>Quản lý sản phẩm</h1>
                    <button
                        onClick={toggleTheme}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: theme === 'light' ? '#333' : '#fff',
                            color: theme === 'light' ? '#fff' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {theme === 'light' ? 'Dark' : 'Light'} Mode
                    </button>
                </header>

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

                <main style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/products" replace />} />
                        <Route path="/products" element={<Products theme={theme} />} />
                        <Route path="/add" element={<AddProduct theme={theme} />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default Lesson7 