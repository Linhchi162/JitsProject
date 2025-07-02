# Sails.js Product API - Đơn giản



## API Endpoints:

### 1. Lấy danh sách sản phẩm
**GET** `http://localhost:1337/api/products`

### 2. Tạo sản phẩm mới
**POST** `http://localhost:1337/api/products`
```json
{
  "name": "Laptop Dell",
  "price": "15.000.000đ"
}
```

### 3. Cập nhật sản phẩm
**PUT** `http://localhost:1337/api/products/1`
```json
{
  "name": "Laptop Dell Updated",
  "price": "18.000.000đ"
}
```

### 4. Xóa sản phẩm
**DELETE** `http://localhost:1337/api/products/1`




