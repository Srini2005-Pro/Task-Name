# Task Mate - Advanced To-Do List Web App

## Overview
Task Mate is a full-stack To-Do List web application that allows users to manage their tasks efficiently. Built with a ReactJS frontend and a Node.js backend, this application provides a clean and modern user interface, ensuring a seamless user experience.

## Features
- **Add Task**: Users can create new tasks with a title, description, due date, and category.
- **Edit Task**: Users can modify existing tasks to update their details.
- **Delete Task**: Users can remove tasks they no longer need.
- **Mark as Completed / Incomplete**: Users can track the status of their tasks.
- **Search Tasks**: Users can search for tasks by title or description.
- **Filter Tasks by Category**: Users can filter tasks based on their assigned categories.

## Technologies Used
- **Frontend**: ReactJS
- **Backend**: Node.js with MongoDB
- **Styling**: TailwindCSS (preferred) or plain CSS

## Project Structure
```
task-mate
├── client                # Frontend application
│   ├── public            # Public assets
│   ├── src               # Source code for React application
│   └── README.md         # Client-side documentation
├── server                # Backend application
│   ├── controllers       # Controller functions for task management
│   ├── models            # Mongoose models for MongoDB
│   ├── routes            # API routes for task management
│   ├── config            # Database configuration
│   └── README.md         # Server-side documentation
├── .gitignore            # Git ignore file
└── README.md             # Overall project documentation
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```
3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd server
   node server.js
   ```
2. Start the frontend application:
   ```
   cd ../client
   npm start
   ```

## License
This project is licensed under the MIT License. See the LICENSE file for details.
