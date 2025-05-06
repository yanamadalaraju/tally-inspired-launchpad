const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default username for XAMPP
  password: '', // Default password for XAMPP
  database: 'business_form'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
  const { role, name, phone, email, pincode, consent } = req.body;

  // Insert data into the database
  const query = 'INSERT INTO registrations (role, name, phone, email, pincode, consent) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [role, name, phone, email, pincode, consent], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error inserting data');
    }
    res.status(200).send('Form submitted successfully');
  });
});

// GET route to fetch all form registrations
app.get('/get-registrations', (req, res) => {
    const query = 'SELECT * FROM registrations ORDER BY id DESC';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        return res.status(500).send('Error fetching data');
      }
      res.status(200).json(results);
    });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
