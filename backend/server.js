const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');
const sequelize = require('./config/database');
require('./models/relations');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/members', memberRoutes);

app.listen(port, async () => {
    console.log(`Backend server is running on http://localhost:${port}`);

    try {
      await sequelize.authenticate();
      console.log('Database connected!');
      await sequelize.sync();
      console.log('Database synced!');
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
  });
