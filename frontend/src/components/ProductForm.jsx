import { useState } from 'react'

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() && price.trim()) {
            onAddProduct({
                id: Date.now(),
                name: name.trim(),
                price: price.trim()
            })
            setName('')
            setPrice('')
        }
    }

    return (
        <div >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <label htmlFor="product-name" style={{ marginRight: '10px' }}>Tên sản phẩm:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên sản phẩm"
                    id="product-name"
                />
                <label
                    htmlFor="product-price"
                    style={{
                        marginRight: '10px',
                        marginLeft: '10px'
                    }}>Giá:</label>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Nhập giá"
                    id="product-price"
                /><br />
                <button
                    type="submit"
                    style={{
                        marginLeft: '10px',
                        fontSize: 14,
                        fontWeight: 'bold',
                        padding: '7px'
                    }}>Thêm</button>
            </form>
        </div>
    )
}

export default ProductForm 