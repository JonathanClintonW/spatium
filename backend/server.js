const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/members', memberRoutes);

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
