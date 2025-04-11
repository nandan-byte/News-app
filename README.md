# 📰 News App

A dynamic React-based application that displays real-time news articles from various sources using the News API.

## 🚀 Features

- Fetches top headlines from multiple news sources
- Displays article title, image, description, author, and source
- Handles missing images with a default fallback
- Responsive and simple UI
- "Load News" button to re-fetch latest articles manually
- External links open in a new tab

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6)
- CSS (custom styling)

## 🔑 API Used

This app uses the [NewsAPI.org](https://newsapi.org) to fetch the latest news.

### 🔧 Setup News API Key

1. Register at [https://newsapi.org/register](https://newsapi.org/register)
2. Copy your API key
3. Replace the key in your app's code (typically in `App.js`):

```javascript
const apiKey = "YOUR_NEWSAPI_KEY";
