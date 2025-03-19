# 🛍️ E-Commerce Website (React + Node.js)

This is a **full-stack e-commerce web application** built with **React (frontend)** and **Node.js + Express (backend)**. It features product listings fetched from an external API, cart management, dark mode toggle, and a clean UI.

---

## 🚀 Features

### 🔥 Frontend
- **Product listing page** with dynamic content
- **Dark mode toggle** (state saved in local storage)
- **Add to Cart** functionality (disable button once added)
- **Product details modal** with image, description, and price
- **Bootstrap styling** for clean UI

### 🛠️ Backend
- **Express server** with RESTful routes
- **Product API route** fetches data from [FakeStoreAPI](https://fakestoreapi.com)
- **Cart API route** supports adding/removing items
- **CORS support** for cross-origin requests

---

## 📁 Project Structure

```plaintext
/frontend
  ├── /components
  │   ├── ProductCard.js
  │   ├── ProductModal.js
  │   └── ContactSection.js
  ├── /context
  │   └── DarkModeContext.js
  └── App.js

/backend
  ├── /routes
  │   ├── products.js
  │   └── cart.js
  ├── /controllers
  │   ├── productController.js
  │   └── cartController.js
  └── server.js
```

---

## 💻 Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/yourusername/ecommerce-react-node.git
   cd ecommerce-react-node
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

4. **Run backend server:**
   ```bash
   npm start
   ```

   Backend will run on `http://localhost:5000`

5. **Run frontend server:**
   ```bash
   cd ../frontend
   npm start
   ```

   Frontend will run on `http://localhost:3000`

---

## 🛠️ API Routes

### ✅ Products
- **GET** `/api/products` → Fetches product list from FakeStoreAPI

### 🛒 Cart
- **GET** `/api/cart` → Returns current cart
- **POST** `/api/cart` → Adds product to cart
- **DELETE** `/api/cart/:id` → Removes product from cart

---

## 🌓 Dark Mode Setup

Dark mode state is managed globally using `DarkModeContext` and saved in `localStorage`.
- **DarkModeProvider** wraps the app and provides state
- **toggleDarkMode()** flips the theme
- Dark mode styles (`bg-dark`, `text-white`) apply dynamically

---

## 🎯 Future Enhancements

- 🔥 Pagination and search for products
- 🚀 Persistent cart (backend or localStorage)
- 🔒 User authentication (Login/Register)
- 💡 Checkout page with order summary
- 📌 Error handling UI


