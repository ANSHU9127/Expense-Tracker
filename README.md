# Expense Tracker Application

## Overview
This is a simple full-stack Expense Tracker application that allows users to
add, view, and calculate total expenses. The project focuses on correctness,
clean structure, and real-world behavior.

## Tech Stack
- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express.js
- Database: SQLite

## Features
- Add expense with amount, category, description, and date
- View all expenses in a list
- Sort expenses by latest date
- Calculate total expense dynamically
- Data persistence using SQLite

## API Endpoints
- POST /expenses – Add a new expense
- GET /expenses – Fetch all expenses (supports sorting)

## Design Decisions
- SQLite was used for lightweight persistence
- Vanilla JS was chosen to keep the project simple and readable
- Validation added to prevent invalid input

## Trade-offs / Not Implemented
- No authentication
- No edit/delete expense functionality
- Minimal UI styling

## How to Run
1. Navigate to backend folder
2. Run `npm install`
3. Run `node server.js`
4. Open `frontend/index.html` in browser
   # Expense Tracker Application

## Overview
This project is a simple full-stack Expense Tracker application that allows users
to record and review their daily expenses. The main focus of the project is to
demonstrate correct full-stack implementation, clean structure, and realistic
application behavior.

---

## Tech Stack
- **Frontend:** HTML, CSS, Vanilla JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** SQLite  

---

## Features
- Add expenses with amount, category, description, and date
- View all expenses in a list format
- Sort expenses by latest date
- Calculate total expense dynamically
- Persistent data storage using SQLite
- Server-side input validation

---

## Backend Details
The backend is built using Node.js and Express.js and follows a RESTful API
structure. It handles validation, data storage, and communication with the
frontend.

### API Endpoints
- **POST /expenses**  
  Adds a new expense to the database.

- **GET /expenses**  
  Retrieves all expenses (supports sorting by date).

---

## Database
SQLite is used as a lightweight relational database to store expense records.
This ensures that data is not lost on page refresh and mimics real-world
application behavior.

---

## Design Decisions
- SQLite was chosen for simplicity and persistence
- Vanilla JavaScript was used to keep the frontend minimal and readable
- Focus was kept on correctness rather than UI complexity

---

## Trade-offs / Not Implemented
- No user authentication
- No edit or delete functionality for expenses
- Minimal UI styling
- No pagination

These features were intentionally skipped to keep the project aligned with the
assignment scope.

---

## How to Run the Project

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   Install dependencies:
   npm install
Start the server:
node server.js
The backend will run on:
http://localhost:3000



