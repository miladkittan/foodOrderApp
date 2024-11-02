# 🍔 Restaurant Ordering App

An interactive web application for a restaurant where users can browse the menu, add meals to their cart, view their cart, and proceed to checkout. Built with React (using Vite) for the frontend and Node.js for the backend.

## 🚀 Features

- **Menu Browsing**: View a list of available meals with descriptions, images, and prices.
- **Add to Cart**: Select meals and add them to the cart with a custom quantity.
- **Cart Management**: View and update the cart before checkout.
- **Checkout Process**: Complete orders with a seamless checkout experience.
- **Backend API**: Node.js server with RESTful endpoints to manage orders and meal data.

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js with Express
- **Deployment**: Render

## 📦 Project Structure

```plaintext
.
├── client/               # React frontend
│   ├── public/           # Static assets
│   ├── src/              # React components and pages
│   └── vite.config.js    # Vite configuration file
├── server/               # Node.js backend
│   ├── models/           # Data models (e.g., Order, Meal)
│   ├── routes/           # Express routes
│   ├── server.js         # Main server file
└── render.yaml           # Render configuration file for deployment
```

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/restaurant-ordering-app.git
   cd restaurant-ordering-app
   ```

2. **Install dependencies for both frontend and backend:**

   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables:**

   Create `.env` files in both the frontend (`client`) and backend (`server`) directories.

   - **Frontend `.env` (client/.env):**

     ```plaintext
     VITE_BACKEND_URL=http://localhost:8080  # Backend URL for local development
     ```

   - **Backend `.env` (server/.env):**

     ```plaintext
     PORT=8080
     CORS_ORIGIN=http://localhost:3000  # Frontend URL for local development
     ```

## 🖥️ Running the Project Locally

1. **Start the backend server:**

   In the `server` directory:

   ```bash
   npm start
   ```

   The backend server will start at [http://localhost:8080](http://localhost:8080).

2. **Start the frontend:**

   In the `client` directory:

   ```bash
   npm run dev
   ```

   The frontend will start at [http://localhost:3000](http://localhost:3000).

3. **Access the app in your browser:**

   Go to [http://localhost:3000](http://localhost:3000) to start using the app.

## 📜 API Endpoints

### Meals

- `GET /meals`: Retrieve a list of available meals.
- `GET /meals/:id`: Retrieve details of a specific meal.

### Orders

- `POST /orders`: Place a new order.
- `GET /orders/:id`: Retrieve details of a specific order.

## 🌐 Deployment

The app is deployed on Render with the following configuration:

- **Frontend**: Deployed as a static site using Vite’s `npm run preview`.
- **Backend**: Node.js server using Express.

### Render Configuration

The `render.yaml` file includes the Render configuration for both frontend and backend services.

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
