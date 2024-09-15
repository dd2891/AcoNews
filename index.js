require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// GNews API base URL and your API key
const GNEWS_API = 'https://gnews.io/api/v4';
const API_KEY = process.env.GNEWS_API_KEY;

// Fetch latest news
app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(`${GNEWS_API}/top-headlines`, {
      params: {
        token: API_KEY,
        lang: 'en',
        country: 'us', // Change as per your need
        max: 10
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

// Search for news based on query
app.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'No search query provided' });

  try {
    const response = await axios.get(`${GNEWS_API}/search`, {
      params: {
        token: API_KEY,
        q: query,
        lang: 'en',
        max: 10
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching search results' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

