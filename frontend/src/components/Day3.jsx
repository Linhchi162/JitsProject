import { useState } from 'react'
import ProductForm from './ProductForm'

function Day3() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Sản phẩm A', price: '15.000.000đ' },
        { id: 2, name: 'Sản phẩm B', price: '25.000.000đ' },
        { id: 3, name: 'Sản phẩm C', price: '45.000.000đ' }
    ])

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct])
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
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Day3