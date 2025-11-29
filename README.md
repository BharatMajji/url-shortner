# URL Shortener Web Application

A full-stack web application that shortens long URLs into easy-to-share short links with click tracking.

## Features

✅ **URL Shortening** - Convert long URLs into short codes  
✅ **Click Tracking** - Monitor how many times each link is accessed  
✅ **Redirect** - Short URLs automatically redirect to original links  
✅ **Copy to Clipboard** - Easy sharing functionality  
✅ **MongoDB Database** - Persistent storage of all shortened URLs  
✅ **REST API** - Complete backend API for URL management  
✅ **Beautiful UI** - Modern React frontend with gradient design  

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Data Modeling)
- **CORS** - Cross-origin request handling

### Frontend
- **React** - UI library
- **JavaScript** - Programming language
- **CSS** - Styling with gradient design

## Project Structure

```
url-shortner/
├── backend/
│   ├── index.js           # Main server file
│   ├── .env               # Environment variables
│   └── package.json       # Dependencies
│
└── frontend/
    ├── src/
    │   ├── App.js         # Main React component
    │   ├── App.css        # Styling
    │   └── index.js       # Entry point
    └── package.json       # Dependencies
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (free)
- npm or yarn

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
npm install
```

2. Create `.env` file with MongoDB connection:
```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0
```

3. Start the server:
```bash
npm start
```
Server runs on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```
Frontend runs on `http://localhost:3001`

## API Endpoints

### POST `/api/shorten`
Shortens a long URL

**Request:**
```json
{
  "originalUrl": "https://www.example.com/very/long/url"
}
```

**Response:**
```json
{
  "message": "URL GENERATED SUCCESSFULLY",
  "url": {
    "shortUrl": "abc12345",
    "originalUrl": "https://www.example.com/very/long/url",
    "clicks": 0
  }
}
```

### GET `/:shortUrl`
Redirects to the original URL and increments click count

**Example:** `http://localhost:3000/abc12345` → redirects to original URL

## How to Use

1. Open `http://localhost:3001` in your browser
2. Paste a long URL in the input field
3. Click "Shorten URL"
4. Copy the shortened URL
5. Share it with others
6. When accessed, it redirects to the original URL

## Database Schema

```javascript
{
  originalUrl: String,
  shortUrl: String,
  clicks: Number (default: 0)
}
```

## Deployment

### Deploy Frontend on Vercel
1. Push code to GitHub
2. Go to https://vercel.com
3. Connect your GitHub repository
4. Deploy automatically

### Deploy Backend on Render
1. Go to https://render.com
2. Create new Web Service
3. Connect GitHub repository
4. Set environment variables
5. Deploy

## Author

**BharatMajji**

## License

MIT License - feel free to use this project for learning and personal use.

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Happy URL Shortening! 🚀**
