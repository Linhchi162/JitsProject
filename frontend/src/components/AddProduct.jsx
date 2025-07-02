import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './ui/Button'
import Input from './ui/Input'

function AddProduct({ theme = 'light' }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        if (!name || !price) {
            alert('Vui lòng nhập đầy đủ thông tin')
            return
        }

        try {
            setLoading(true)
            const response = await fetch('http://localhost:1337/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price })
            })

            const result = await response.json()

            if (response.ok) {
                alert('Thêm sản phẩm thành công!')
                navigate('/products') // Chuyển về trang danh sách
            } else {
                alert('Lỗi: ' + result.message)
            }
        } catch (err) {
            alert('Lỗi khi thêm sản phẩm')
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }, [name, price, navigate])

    return (
        <div>
            <h2>Thêm sản phẩm mới</h2>

            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên sản phẩm"
                    label="Tên sản phẩm"
                    required
                    disabled={loading}
                    theme={theme}
                />

                <Input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Nhập giá"
                    label="Giá"
                    required
                    disabled={loading}
                    theme={theme}
                />

                <Button
                    type="submit"
                    variant="success"
                    size="medium"
                    disabled={loading}
                    style={{ width: '100%' }}
                >
                    {loading ? ' Đang thêm...' : ' Thêm sản phẩm'}
                </Button>
            </form>
        </div>
    )
}

export default AddProduct 