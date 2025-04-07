# Dux Outsourcing - MERN Stack Website

A modern website for Dux Outsourcing built with the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Features

- Responsive landing page with essential components
- Services showcase
- About section with company information
- Articles/blog section
- Contact form
- Admin dashboard
- Pricing plans
- User authentication

## Tech Stack

### Frontend
- React.js
- Material-UI
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Project Structure

```
dux-outsourcing/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # Source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── layouts/       # Layout components
│       ├── services/      # API services
│       └── utils/         # Utility functions
│
└── server/                # Node.js backend
    ├── src/
    │   ├── controllers/   # Route controllers
    │   ├── models/        # Database models
    │   ├── routes/        # API routes
    │   ├── config/        # Configuration files
    │   └── middleware/    # Custom middleware
    └── package.json       # Backend dependencies
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dux-outsourcing.git
cd dux-outsourcing
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Create a .env file in the server directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dux-outsourcing
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Articles
- GET /api/articles - Get all articles
- GET /api/articles/:id - Get single article
- POST /api/articles - Create article (admin only)
- PUT /api/articles/:id - Update article (admin only)
- DELETE /api/articles/:id - Delete article (admin only)

### Services
- GET /api/services - Get all services
- GET /api/services/:id - Get single service
- POST /api/services - Create service (admin only)
- PUT /api/services/:id - Update service (admin only)
- DELETE /api/services/:id - Delete service (admin only)

### Contact
- POST /api/contact - Send contact message

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:
- Email: info@duxoutsourcing.com
- Website: https://duxoutsourcing.com # dux-outsourcing
# dux-outsourcing
