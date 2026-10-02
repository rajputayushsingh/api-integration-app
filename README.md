# 🌤️ API Integration Weather App

A simple and responsive **Weather API Integration App** built using **HTML, CSS, JavaScript, Node.js, Express.js, and OpenWeather API**.

The application allows users to search for a city and view real-time weather information such as temperature, humidity, wind speed, weather conditions, and feels-like temperature.

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Real-time temperature
* 💧 Humidity information
* 🌬️ Wind speed
* 🌡️ Feels-like temperature
* 🌤️ Weather condition and icon
* ⚡ API integration using Axios
* 🔄 Loading state while fetching data
* ❌ Error handling for invalid requests
* 📱 Responsive user interface
* ⌨️ Enter key support for searching

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* Axios
* CORS
* dotenv

### API

* OpenWeather API

## 📁 Project Structure

```text
API Integration App/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rajputayushsingh/api-integration-app.git
```

### 2. Navigate to the Project

```bash
cd api-integration-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env` File

Create a `.env` file in the root directory:

```env
WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Replace `YOUR_OPENWEATHER_API_KEY` with your own OpenWeather API key.

### 5. Start the Application

For development:

```bash
npm run dev
```

Or:

```bash
npm start
```

### 6. Open in Browser

```text
http://localhost:5000
```

## 🔑 API Integration

The application uses the OpenWeather API to fetch weather information.

The frontend sends the city name to the backend:

```text
/api/weather?city=Varanasi
```

The Express.js backend communicates with the OpenWeather API and returns the required weather data to the frontend.

## 🔒 Environment Variables

For security, the API key is stored in the `.env` file.

The `.env` file should **never be uploaded to GitHub**.

The `.gitignore` file includes:

```gitignore
node_modules/
.env
```

## 📸 How It Works

```text
User enters city
       ↓
Frontend JavaScript
       ↓
Express.js Backend
       ↓
OpenWeather API
       ↓
Weather Data
       ↓
Weather Card displayed
```

## 🎯 Learning Objectives

This project helped me practice:

* REST API integration
* Fetching data from external APIs
* Express.js backend development
* Axios
* Environment variables
* Async/Await
* Error handling
* Frontend-backend communication
* Git and GitHub

## 🔮 Future Improvements

* 📍 Detect weather using current location
* 📅 5-day weather forecast
* 🌙 Dark mode
* 🌎 Multiple weather units
* 📊 Weather history
* ⭐ Favorite cities
* 📱 Improved mobile UI

## 👨‍💻 Author

**Ayush Singh**

B.Tech Computer Science Engineering Student

GitHub: **rajputayushsingh**

---

⭐ If you find this project useful, consider giving it a star!
