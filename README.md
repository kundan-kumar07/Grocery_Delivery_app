# 🛒 GreenCart – Full Stack Grocery Delivery Platform

🌐 **Live Demo:** https://greencart-front.vercel.app/

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT%20Authentication-red)
![Stripe](https://img.shields.io/badge/Payments-Stripe-purple)

**GreenCart** is a full-stack grocery delivery web application that allows users to browse grocery products, add them to their cart, and place orders online.

The platform includes **secure authentication, online payments, order management, and an admin dashboard** that allows vendors to manage products like a digital grocery store.

This project aims to help **local grocery vendors bring their stores online** and provide customers with a convenient shopping experience.


---

# ✨ Features

## 👤 Authentication
- Secure authentication using **JWT**
- User signup and login
- Protected API routes
- Token-based authorization

---

## 🛍️ Product Catalog
- Browse grocery items
- Product images and descriptions
- Category-based products
- Dynamic product listing

---

## 🛒 Shopping Cart
- Add products to cart
- Update product quantity
- Remove items from cart
- Real-time cart total calculation

---

## 💳 Online Payments
- Secure checkout using **Stripe**
- Payment verification using **Stripe Webhooks**
- Order confirmation after successful payment

---

## 📦 Order Management
- Place orders after checkout
- View order details
- Track order status

---

## 🧑‍💼 Admin Dashboard
Admin panel to manage the store like a **digital grocery shop**

Admin can:

- Add new products
- Edit product details
- Delete products
- Manage product inventory
- View all orders
- Manage customer orders

---

## 📱 Responsive Design
- Fully responsive interface
- Works on **desktop, tablet, and mobile devices**

---

# 🛠️ Tech Stack

## Frontend
- React
- React Router
- Context API / Redux (if used)
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication
- JWT (JSON Web Tokens)

## Payments
- Stripe
- Stripe Webhooks

## Image Storage
- Cloudinary 

---


# ⚡ Installation

### 1. Clone the repository

```bash
git clone https://github.com/kundan-kumar07/Grocery_Delivery_app.git
cd Grocery_Delivery_app
```

---

### 2. Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 3. Run the project

#### Start Backend

```bash
npm run dev
```

#### Start Frontend

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create `.env` files in both **client** and **server** directories.

---

## Server `.env`

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development

# Admin Credentials
SELLER_EMAIL=admin_email
SELLER_PASSWORD=admin_password

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

---

## Client `.env`

```env
VITE_BACKEND_URL=https://your-backend-url
VITE_CURRENCY=$
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

---

# 👨‍💻 Author

**Kundan Kumar Dubey**

GitHub:  
https://github.com/kundan-kumar07
