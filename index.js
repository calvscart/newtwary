const express = require('express');
const app = express();
const PORT = 3000;

// Serve static HTML
app.use(express.static('public'));

// API routes
const routes = require('./routes');
app.use('/api', routes);  // now all endpoints are under /api/

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});