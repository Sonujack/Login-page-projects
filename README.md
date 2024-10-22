# React Account Management Application

## Description
This is a simple React application that allows users to create and manage accounts. The application includes a registration page, a login page, and an account management page where users can view and edit their account details. It is built using React (V16+) and Bootstrap for basic styling, with routing enabled via React Router.

## Features
- User registration with name, email, and password.
- Login functionality with email and password validation.
- Account management: View and edit profile information.
- Persistent login using localStorage.
- Logout functionality.
- Responsive design using Bootstrap.

## Tech Stack
- **React** (V16+)
- **React Router** (for routing)
- **Bootstrap** (for styling)
- **Vite** (for development environment)

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sonujack/react-account-management-app.git

2. Navigate to the project directory:
   ```bash
cd react-account-management-app

3. Install dependencies:
   ```bash
npm install

4. Start the development server:
   ```bash
npm run dev


## Project Structure
src/
│
├── components/
│   ├── Login.jsx        # Login component
│   ├── Register.jsx     # Register component
│   └── Account.jsx      # Account management component
│
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point for the React app
├── index.css            # Global styles
└── ...
