# 🚆 PNR Checker

A full-stack web application that allows users to check Indian Railway PNR status by entering a 10-digit PNR number.

## Features

* Check railway PNR status
* View train information
* View source and destination stations
* View journey date and class
* View chart preparation status
* View passenger booking and current status
* Responsive user interface

## Tech Stack

### Frontend

* React.js
* Vite
* CSS

### Backend

* Node.js
* Express.js
* Axios
* CORS

### API

* IRCTC Indian Railway PNR Status API (RapidAPI)

## Project Structure

```text
pnr-checker/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchForm.jsx
│   │   │   └── PNRResult.jsx
│   │   ├── App.jsx
│   │   └── index.css
│
├── server/
│   ├── index.js
│   ├── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/harshitasingh28/PNR-checker.git
cd PNR-checker
```

### Backend Setup

```bash
cd server
npm install
npm start
```

Backend runs on:

```text
http://localhost:3000
```

### Frontend Setup

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Endpoint

```http
GET /api/pnr/:number
```

Example:

```http
GET /api/pnr/1234567890
```

## Future Improvements

* Better UI/UX
* Loading states
* Error handling
* Deployment using Vercel and Render
* PNR history tracking

## Author

Harshita Singh
