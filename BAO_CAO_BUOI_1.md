# 📋 BÁO CÁO BUỔI 1: KIẾN TRÚC FULLSTACK & CÔNG CỤ

## 🎯 **MỤC TIÊU BUỔI HỌC**
- Hiểu kiến trúc Client-Server
- Nắm vững RESTful API
- Setup React + Sails.js
- Làm quen với Git, VSCode, Postman, Node.js

## 📚 **KIẾN THỨC ĐÃ HỌC**

### **1. Kiến trúc Client-Server**
- **Client (Frontend)**: React application chạy trên browser
- **Server (Backend)**: Sails.js application xử lý business logic
- **Giao tiếp**: HTTP requests/responses qua RESTful API
- **Data Flow**: Client gửi request → Server xử lý → Trả về response

### **2. RESTful API**
- **REST**: Representational State Transfer
- **Nguyên tắc**:
  - Stateless: Mỗi request độc lập
  - Resource-based URLs: `/api/products`, `/api/users`
  - HTTP Methods: GET, POST, PUT, DELETE
  - JSON Response format
- **Ví dụ**: `GET /api/ping` → `{ "message": "pong" }`

### **3. Công cụ Development**
- **Node.js**: Runtime environment cho JavaScript
- **npm**: Package manager
- **Git**: Version control system
- **VSCode**: Code editor với extensions
- **Postman**: API testing tool

## 🛠️ **IMPLEMENTATION**

### **1. Project Structure**
```
JitsProject/
├── backend/          # Sails.js application
│   ├── api/
│   │   ├── controllers/
│   │   │   └── PingController.js
│   │   └── models/
│   ├── config/
│   │   └── routes.js
│   └── package.json
└── frontend/         # React application
    ├── src/
    │   ├── App.jsx
    │   └── components/
    └── package.json
```

### **2. Backend Setup (Sails.js)**

#### **A. Dependencies**
```json
{
  "dependencies": {
    "sails": "^1.5.14",
    "grunt": "1.0.4",
    "sails-hook-grunt": "^5.0.0",
    "sails-hook-orm": "^4.0.3",
    "sails-hook-sockets": "^3.0.0"
  }
}
```

#### **B. API Controller**
```javascript
// backend/api/controllers/PingController.js
module.exports = {
  ping: function (req, res) {
    return res.json({ message: 'pong' });
  }
};
```

#### **C. Route Configuration**
```javascript
// backend/config/routes.js
module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'GET /api/ping': 'PingController.ping'
};
```

### **3. Frontend Setup (React + Vite)**

#### **A. Dependencies**
```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.6.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.5.2",
    "vite": "^7.0.0"
  }
}
```

#### **B. Main Application**
```jsx
// frontend/src/App.jsx
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My CMS</h1>
      </header>
      {/* Navigation and content components */}
    </div>
  )
}

export default App
```

## 🧪 **TESTING & VALIDATION**

### **1. Backend API Testing**
- **Endpoint**: `GET /api/ping`
- **Expected Response**: `{ "message": "pong" }`
- **Status Code**: 200 OK
- **Test Tool**: Postman

### **2. Frontend Display**
- **Homepage**: Hiển thị "Welcome to My CMS"
- **Navigation**: Menu sidebar với các buổi học
- **Responsive**: Layout thích ứng mobile/desktop

## 📖 **TÀI LIỆU THAM KHẢO**
- [REST API Documentation](https://developer.mozilla.org/vi/docs/Glossary/REST)
- [Sails.js Getting Started](https://sailsjs.com/get-started)
- [React with Vite Setup](https://viblo.asia/p/setup-react-voi-vite-63vKjMmyKxR)
- [Git Tutorial](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)

## ✅ **KẾT QUẢ ĐẠT ĐƯỢC**

### **1. Kiến thức**
- ✅ Hiểu kiến trúc Client-Server
- ✅ Nắm vững RESTful API principles
- ✅ Biết cách setup development environment

### **2. Kỹ năng**
- ✅ Setup Sails.js backend
- ✅ Setup React frontend với Vite
- ✅ Tạo API endpoint `/api/ping`
- ✅ Hiển thị "Welcome to My CMS" trên frontend
- ✅ Sử dụng Git cho version control

### **3. Công cụ**
- ✅ Node.js & npm
- ✅ Git & VSCode
- ✅ Postman cho API testing
- ✅ Package management

## 🎓 **BÀI HỌC RÚT RA**

### **1. Kiến trúc**
- Client-Server separation giúp code dễ maintain
- RESTful API là standard cho web development
- JSON là format phổ biến cho data exchange

### **2. Development Workflow**
- Git giúp track changes và collaborate
- VSCode với extensions tăng productivity
- Postman essential cho API development

### **3. Best Practices**
- Modular project structure
- Clear separation of concerns
- Consistent naming conventions
- Version control từ đầu

## 🚀 **NEXT STEPS**
- Tích hợp frontend-backend communication
- Implement more API endpoints
- Add database integration
- Deploy to production environment

---

**Ngày hoàn thành**: [Current Date]  
**Thời gian**: 1 buổi học  
**Trạng thái**: ✅ Hoàn thành 