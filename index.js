const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const PORT = process.env.PORT || 8000;

app.post('/auth', async (req, res) => {
    const { username } = req.body;
    try {
        const response = await axios.put("https://api.chatengine.io/users/", 
        { username: username, secret: username, first_name: username }, 
        { headers: { "PRIVATE-KEY": "f13f0b11-725c-4a82-b888-06443cc11735" } }
        );
        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})