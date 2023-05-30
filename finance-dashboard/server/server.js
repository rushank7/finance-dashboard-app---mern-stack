const express = require('express');
const cors = require('cors');
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Sample data
const data = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
  { id: 3, name: 'Company C' },
];

// Routes
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});