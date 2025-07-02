import { useState } from 'react'
import ProductForm from './ProductForm'

function Day4() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Sản phẩm A', price: '15.000.000đ' },
        { id: 2, name: 'Sản phẩm B', price: '25.000.000đ' },
        { id: 3, name: 'Sản phẩm C', price: '45.000.000đ' }
    ])
    const [editingId, setEditingId] = useState(null)
    const [editName, setEditName] = useState('')
    const [editPrice, setEditPrice] = useState('')

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const handleEditProduct = (product) => {
        setEditingId(product.id)
        setEditName(product.name)
        setEditPrice(product.price)
    }

    const handleSaveEdit = () => {
        setProducts(products.map(product =>
            product.id === editingId
                ? { ...product, name: editName, price: editPrice }
                : product
        ))
        setEditingId(null)
        setEditName('')
        setEditPrice('')
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setEditName('')
        setEditPrice('')
    }

    return (
        <div>
            <ProductForm onAddProduct={handleAddProduct} />

            {products.length === 0 ? (
                <p>Chưa có sản phẩm nào</p>
            ) : (
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    {editingId === product.id ? (
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                    ) : (
                                        product.name
                                    )}
                                </td>
                                <td>
                                    {editingId === product.id ? (
                                        <input
                                            type="text"
                                            value={editPrice}
                                            onChange={(e) => setEditPrice(e.target.value)}
                                        />
                                    ) : (
                                        product.price
                                    )}
                                </td>
                                <td>
                                    {editingId === product.id ? (
                                        <div>
                                            <button className='greenButton' onClick={handleSaveEdit}>Lưu</button>
                                            <button className='redButton' onClick={handleCancelEdit}>Hủy</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button className='greenButton' onClick={() => handleEditProduct(product)}>Sửa</button>
                                            <button className='redButton' onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
                                        </div>
                                    )}                        
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Day4