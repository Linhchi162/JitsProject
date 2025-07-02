import { useState, useEffect } from 'react'

function Day6() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    // Lấy danh sách sản phẩm
    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:1337/api/products')
            const data = await response.json()
            setProducts(data)
            setError(null)
        } catch (err) {
            setError('Lỗi khi tải dữ liệu')
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }

    // Thêm sản phẩm mới
    const addProduct = async (e) => {
        e.preventDefault();
        if (!name || !price) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        try {
            const response = await fetch('http://localhost:1337/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price })
            });

            const result = await response.json();

            if (response.ok) {
                await fetchProducts();
                setName('');
                setPrice('');
            } else {
                alert('Lỗi: ' + result.message);
            }
        } catch (err) {
            alert('Lỗi khi thêm sản phẩm');
            console.error('Error:', err);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if (loading) {
        return <div>Đang tải...</div>
    }

    if (error) {
        return <div>Lỗi: {error}</div>
    }

    return (
        <div>
            <div>
                <form onSubmit={addProduct} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '10px' }}>Tên sản phẩm: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập tên sản phẩm"
                    />
                    <label style={{ marginRight: '10px' }}>Giá: </label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Nhập giá"
                    />
                    <button type="submit" style={{ marginLeft: '10px', fontSize: 14, fontWeight: 'bold', padding: '7px' }}>
                        Thêm sản phẩm
                    </button>
                </form>
            </div>
            <div>
                {products.length === 0 ? (
                    <p>Chưa có sản phẩm nào</p>
                ) : (
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default Day6 