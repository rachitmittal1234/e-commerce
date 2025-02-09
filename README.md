# 🛒 E-Commerce Clothing Store

This is a clothing store application built using the **MERN stack (MongoDB, Express, React, Node.js)**. It includes user authentication, a shopping cart, Stripe payment gateway, Cloudinary for image storage, and a responsive UI. The website is deployed on **Vercel** and uses **MongoDB** for data storage.

## 🌐 Live Website

You can visit the live website here: [E-Commerce Clothing Store](https://e-commerce-frontend-beryl-six.vercel.app/)

## 📋 Features

### **User Features:**

- 🏠 **Home Page**: The home page consists of multiple components, each contributing to a dynamic and engaging user experience:
  - 🎉 `<Hero />`: A large banner section with promotional images and deals.
  - 🛍️ `<LatestCollection />`: Highlights the most recent product additions to the store.
  - 🌟 `<BestSeller />`: Showcases the best-selling products for quick access to popular items.
  - ✅ `<OurPolicies />`: Displays the store's policies:
    - 🔄 **Easy Exchange Policy**: Customers can exchange products hassle-free.
    - 🔙 **7-Day Return Policy**: Customers can return products within 7 days if they are unsatisfied.
    - 🚚 **Free Shipping**: Free delivery on all orders over a certain amount.
  - ✉️ `<NewsLetterBox />`: Allows users to subscribe to the newsletter for the latest updates and offers.

- 🔍 **Search Functionality**: Quickly find products with a fast and responsive search bar.
- 🛍️ **Product Collections**: Browse a vast array of products, organized into easily navigable categories.
- 🗂️ **Category Filters**: Easily filter products based on categories like:
  - 👔 **Men**
  - 👗 **Women**
  - 👶 **Kids**
- 👕 **Sub-categories**: Narrow down your search with sub-categories for better product discovery:
  - **Top Wear** (e.g., T-shirts, shirts)
  - **Bottom Wear** (e.g., pants, shorts)
  - **Winter Wear** (e.g., jackets, sweaters)
- 🛒 **Shopping Cart**: Add products to your cart and seamlessly manage your purchases.
- 💳 **Checkout System**: Secure and user-friendly payment process.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop devices.

### **Admin Features:**
- **Add Item**: Admins can add new clothing items to the store, including product details like name, price, category, and image.
- **List Item**: Admins can view and manage the list of all products currently available in the store.
- **View Order**: Admins can view all customer orders placed through the website.
- **Update Order Status**: Admins can update the status of orders (e.g., Processing, Shipped, Delivered).

#### **Admin Login Credentials:**
- **Email** : admin@gmail.com
- **password** : helloadmin

---


## 🛠️ Technologies Used

### **Frontend:**
- **[React](https://reactjs.org/)** - A JavaScript library for building the user interface.
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for styling and creating a responsive design.
  
### **State Management:**
- **React Hooks** and **Context API** for managing global state across components.

### **Backend:**
- **[Node.js](https://nodejs.org/en/)** - A JavaScript runtime used for building the backend server.
- **[Express.js](https://expressjs.com/)** - A web application framework for Node.js to build the API and handle routes.

### **Database:**
- **[MongoDB](https://www.mongodb.com/)** - A NoSQL database used to store product, order, and user data.

### **Payment Gateway:**
- **[Stripe](https://stripe.com/)** - Used for handling secure payments for the products in the store.

### **File Storage:**
- **[Cloudinary](https://cloudinary.com/)** - A cloud-based service used for image and video storage. It helps to upload and serve product images in the store.

### **Authentication:**
- **JWT (JSON Web Tokens)** for secure user authentication.
