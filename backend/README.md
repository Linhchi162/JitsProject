# Sails.js Product API - Đơn giản

## Cách chạy:
```bash
cd backend
sails lift
```

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

## Test với Postman:

1. Tạo request mới
2. Chọn method (GET, POST, PUT, DELETE)
3. Nhập URL
4. Với POST/PUT: Body → raw → JSON
5. Send request

## Cấu trúc đơn giản:
- **Model**: `api/models/Product.js` - định nghĩa cấu trúc dữ liệu
- **Controller**: `api/controllers/ProductController.js` - xử lý logic
- **Routes**: `config/routes.js` - định nghĩa đường dẫn

# backend

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Jun 30 2025 12:19:56 GMT+0700 (Indochina Time) using Sails v1.5.14.

<!-- Internally, Sails used [`sails-generate@2.0.13`](https://github.com/balderdashy/sails-generate/tree/v2.0.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

