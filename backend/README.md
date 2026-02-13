# Banking Mobile App - Backend

A comprehensive banking backend API built with Node.js, Express, TypeScript, and MongoDB.

## Features

- User authentication with OTP verification
- Wallet management
- Card management (create, freeze, unfreeze, delete)
- Transactions (deposit, withdraw, transfer)
- In-app notifications
- Email notifications
- Swagger API documentation

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Email**: Nodemailer
- **Documentation**: Swagger

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Gmail account with App Password (for email notifications)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

## API Documentation

Once the server is running, access the Swagger documentation at:
```
http://localhost:5000/api-docs
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Request login OTP
- `POST /api/auth/verify-otp` - Verify OTP and get token
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### Wallet
- `GET /api/wallet/me` - Get user's wallet
- `POST /api/wallet/deposit` - Deposit funds
- `POST /api/wallet/withdraw` - Withdraw funds

### Transactions
- `POST /api/transactions/deposit` - Deposit to wallet
- `POST /api/transactions/withdraw` - Withdraw from wallet
- `POST /api/transactions/transfer` - Transfer to another user
- `GET /api/transactions/history` - Get transaction history

### Cards
- `POST /api/cards` - Create new card
- `GET /api/cards` - Get all user cards
- `PATCH /api/cards/:cardId/freeze` - Freeze card
- `PATCH /api/cards/:cardId/unfreeze` - Unfreeze card
- `DELETE /api/cards/:cardId` - Delete card

### Notifications
- `GET /api/notifications` - Get user notifications
- `GET /api/notifications/unread-count` - Get unread count
- `PATCH /api/notifications/read-all` - Mark all as read
- `PATCH /api/notifications/:id/read` - Mark one as read

### System
- `GET /health` - Health check
- `GET /api/system/health` - System diagnostics
- `POST /api/system/test-email` - Test email configuration

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middlewares/     # Custom middlewares
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server entry point
├── .env.example         # Environment variables template
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port | No (default: 5000) |
| NODE_ENV | Environment mode | No (default: development) |
| MONGODB_URI | MongoDB connection string | Yes |
| JWT_SECRET | Secret for JWT tokens | Yes |
| EMAIL_HOST | SMTP host | Yes |
| EMAIL_PORT | SMTP port | Yes |
| EMAIL_USER | Email username | Yes |
| EMAIL_PASS | Email password/app password | Yes |
| EMAIL_FROM | Sender email address | No |

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected routes with middleware
- Input validation
- CORS configuration
- Environment variable protection

## Error Handling

All endpoints return consistent error responses:
```json
{
  "message": "Error description"
}
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

ISC
