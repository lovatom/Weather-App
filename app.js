const express = require('express');
const app = express();
const path = require ('path');
require('dotenv').config();

app.use(express.static('public'));
app.use('/style.css', express.static(__dirname + 'public/style.css'));
app.use('images', express.static(__dirname + 'public/images'));

app.get('', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

app.listen(3000, function(){
    console.log('Server is up at port 3000');
});

app.get('/getWeather', async (req, res) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Example API endpoint
    const params = {
      q: req.query.city, // Assuming the city is sent as a query parameter
      appid: apiKey,
    };

    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
