# TaskFlow - MERN Task Manager

A simple full-stack MERN task manager application for managing personal tasks with user authentication and status tracking.

## Tech Stack

- **Frontend**: React (Vite), Axios, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcrypt

## Features

- User registration and login with JWT authentication
- Create, read, update, and delete tasks
- Tasks have title, description, status (todo/in-progress/done), due date, and priority
- User-specific task management
- Dashboard with tasks grouped by status
- Filter tasks by status and priority
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- npm or yarn

### Backend Setup

```bash
cd server
npm install
cp .env.example .env
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Project Structure

```
gitproj/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                 # Express backend
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── .env
│   ├── server.js
│   └── package.json
└── README.md
```
