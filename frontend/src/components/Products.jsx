import { useState, useEffect, useMemo, useCallback } from 'react'
import Button from './ui/Button'
import Input from './ui/Input'
import Pagination from './ui/Pagination'
import ModalConfirm from './ui/ModalConfirm'

function Products({ theme = 'light' }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, productId: null })
    const [editMode, setEditMode] = useState({ isEditing: false, productId: null })
    const [editData, setEditData] = useState({ name: '', price: '' })
    const itemsPerPage = 5

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:1337/api/products')
            const data = await response.json()
            setProducts(data)
        } catch (err) {
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }, [])

    const deleteProduct = useCallback(async (productId) => {
        try {
            const response = await fetch(`http://localhost:1337/api/products/${productId}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                setProducts(prev => prev.filter(p => p.id !== productId))
                alert('Xóa sản phẩm thành công!')
            } else {
                alert('Lỗi khi xóa sản phẩm')
            }
        } catch (err) {
            console.error('Error:', err)
            alert('Lỗi khi xóa sản phẩm')
        }
    }, [])

    const startEdit = useCallback((product) => {
        setEditMode({ isEditing: true, productId: product.id })
        setEditData({ name: product.name, price: product.price })
    }, [])

    const cancelEdit = useCallback(() => {
        setEditMode({ isEditing: false, productId: null })
        setEditData({ name: '', price: '' })
    }, [])

    const saveEdit = useCallback(async () => {
        if (!editData.name || !editData.price) {
            alert('Vui lòng nhập đầy đủ thông tin')
            return
        }

        try {
            const response = await fetch(`http://localhost:1337/api/products/${editMode.productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editData)
            })

            if (response.ok) {
                const updatedProduct = await response.json()
                setProducts(prev => prev.map(p =>
                    p.id === editMode.productId ? updatedProduct.product : p
                ))
                setEditMode({ isEditing: false, productId: null })
                setEditData({ name: '', price: '' })
                alert('Cập nhật sản phẩm thành công!')
            } else {
                alert('Lỗi khi cập nhật sản phẩm')
            }
        } catch (err) {
            console.error('Error:', err)
            alert('Lỗi khi cập nhật sản phẩm')
        }
    }, [editMode.productId, editData])

    const filteredProducts = useMemo(() => {
        if (!searchTerm.trim()) return products
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.price.toString().includes(searchTerm)
        )
    }, [products, searchTerm])

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return filteredProducts.slice(startIndex, endIndex)
    }, [filteredProducts, currentPage, itemsPerPage])

    const totalPages = useMemo(() => {
        return Math.ceil(filteredProducts.length / itemsPerPage)
    }, [filteredProducts.length, itemsPerPage])

    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm])

    if (loading) {
        return <div>Đang tải danh sách sản phẩm...</div>
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Danh sách sản phẩm</h2>
                <Button onClick={fetchProducts} variant="outline" size="small">
                    Làm mới
                </Button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <Input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm theo tên hoặc giá..."
                    theme={theme}
                    style={{ maxWidth: '300px' }}
                />
            </div>

            <div style={{
                marginBottom: '15px',
                padding: '10px',
                backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
                borderRadius: '4px',
                fontSize: '14px'
            }}>
                Hiển thị {paginatedProducts.length} / {filteredProducts.length} sản phẩm
                {searchTerm && ` (tìm kiếm: "${searchTerm}")`}
            </div>

            {filteredProducts.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    color: theme === 'dark' ? '#ccc' : '#666'
                }}>
                    {searchTerm ? 'Không tìm thấy sản phẩm phù hợp' : 'Chưa có sản phẩm nào'}
                </div>
            ) : (
                <>
                    <table className="product-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{
                                    border: `1px solid ${theme === 'dark' ? '#666' : '#ddd'}`,
                                    padding: '12px',
                                    textAlign: 'left',
                                    backgroundColor: theme === 'dark' ? '#555' : '#f2f2f2',
                                    color: theme === 'dark' ? 'white' : 'black'
                                }}>Tên sản phẩm</th>
                                <th style={{
                                    border: `1px solid ${theme === 'dark' ? '#666' : '#ddd'}`,
                                    padding: '12px',
                                    textAlign: 'left',
                                    backgroundColor: theme === 'dark' ? '#555' : '#f2f2f2',
                                    color: theme === 'dark' ? 'white' : 'black'
                                }}>Giá</th>
                                <th style={{
                                    border: `1px solid ${theme === 'dark' ? '#666' : '#ddd'}`,
                                    padding: '12px',
                                    textAlign: 'left',
                                    backgroundColor: theme === 'dark' ? '#555' : '#f2f2f2',
                                    color: theme === 'dark' ? 'white' : 'black'
                                }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedProducts.map(product => (
                                <tr key={product.id}>
                                    <td style={{ border: `1px solid ${theme === 'dark' ? '#666' : '#ddd'}`, padding: '12px' }}>
                                        {editMode.isEditing && editMode.productId === product.id ? (
                                            <Input
                                                type="text"
                                                value={editData.name}
                                                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                                                theme={theme}
                                                style={{ width: '100%', margin: 0 }}
                                            />
                                        ) : (
                                            product.name
                                        )}
                                    </td>
                                    <td style={{ border: `1px solid ${theme === 'dark' ? '#666' : '#ddd'}`, padding: '12px' }}>
                                        {editMode.isEditing && editMode.productId === product.id ? (
                                            <Input
                                                type="text"
                                                value={editData.price}
                                                onChange={(e) => setEditData(prev => ({ ...prev, price: e.target.value }))}
                                                theme={theme}
                                                style={{ width: '100%', margin: 0 }}
                                            />
                                        ) : (
                                            product.price
                                        )}
                                    </td>
                                    <td style={{ border: `1px solid ${theme === 'dark' ? '#666' : '#ddd'}`, padding: '12px' }}>
                                        {editMode.isEditing && editMode.productId === product.id ? (
                                            <div style={{ display: 'flex', gap: '5px' }}>
                                                <Button
                                                    variant="success"
                                                    size="small"
                                                    onClick={saveEdit}
                                                >
                                                    Lưu
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    size="small"
                                                    onClick={cancelEdit}
                                                >
                                                    Hủy
                                                </Button>
                                            </div>
                                        ) : (
                                            <div style={{ display: 'flex', gap: '5px' }}>
                                                <Button
                                                    variant="primary"
                                                    size="small"
                                                    onClick={() => startEdit(product)}
                                                >
                                                    Sửa
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="small"
                                                    onClick={() => setDeleteModal({ isOpen: true, productId: product.id })}
                                                >
                                                    Xóa
                                                </Button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        theme={theme}
                    />
                </>
            )}

            <ModalConfirm
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false, productId: null })}
                onConfirm={() => deleteProduct(deleteModal.productId)}
                title="Xác nhận xóa"
                message="Bạn có chắc chắn muốn xóa sản phẩm này?"
                confirmText="Xóa"
                cancelText="Hủy"
                theme={theme}
            />
        </div>
    )
}

export default Products 