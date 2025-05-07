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
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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
  const { role, name, phone, email, pincode } = req.body;

  const query = 'INSERT INTO registrations (role, name, phone, email, pincode) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [role, name, phone, email, pincode], (err, result) => {
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

// PUT route to update a registration
app.put('/update-registration', (req, res) => {
  const { id, role, name, phone, email, pincode } = req.body;

  const query = `
    UPDATE registrations
    SET role = ?, name = ?, phone = ?, email = ?, pincode = ?
    WHERE id = ?
  `;
  db.query(query, [role, name, phone, email, pincode, id], (err, result) => {
    if (err) {
      console.error('Error updating registration:', err);
      return res.status(500).send({ success: false, message: 'Error updating registration' });
    }
    res.status(200).send({ success: true, message: 'Registration updated successfully' });
  });
});

// DELETE route to remove a registration by ID
app.delete('/delete-registration/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM registrations WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting registration:', err);
      return res.status(500).send({ success: false, message: 'Error deleting registration' });
    }
    res.status(200).send({ success: true, message: 'Registration deleted successfully' });
  });
});

// GET route to fetch webinar details
app.get('/webinars', (req, res) => {
  const query = 'SELECT * FROM webinars ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching webinar data:', err);
      return res.status(500).send('Error fetching webinar data');
    }
    res.status(200).json(results);
  });
});

// Serve HTML form for adding webinars
// app.get('/admin/add-webinar', (req, res) => {
//   res.send(`
//     <html>
//       <head>
//         <title>Add Webinar</title>
//         <style>
//           body { font-family: Arial; padding: 2rem; }
//           input, textarea { width: 100%; padding: 0.5rem; margin-bottom: 1rem; }
//           label { font-weight: bold; }
//           button { padding: 0.5rem 1rem; background: green; color: white; border: none; cursor: pointer; }
//         </style>
//       </head>
//       <body>
//         <h2>Add New Webinar</h2>
//         <form method="POST" action="/admin/add-webinar">
//           <label>Title</label><br />
//           <input type="text" name="title" required /><br />

//           <label>Date (e.g., 2025-05-10)</label><br />
//           <input type="text" name="date" required /><br />

//           <label>Duration (e.g., 1 Hour)</label><br />
//           <input type="text" name="duration" required /><br />

//           <label>Presenters (comma-separated)</label><br />
//           <input type="text" name="presenters" required /><br />

//           <label>Takeaways (one per line)</label><br />
//           <textarea name="takeaways" rows="5" required></textarea><br />

//           <button type="submit">Add Webinar</button>
//         </form>
//       </body>
//     </html>
//   `);
// });

// Handle form submission
// app.post('/admin/add-webinar', (req, res) => {
//   const { title, date, duration, presenters, takeaways } = req.body;
//   const takeawaysArray = takeaways.split('\n').map(item => item.trim()).filter(Boolean);
//   const takeawaysJSON = JSON.stringify(takeawaysArray);

//   const query = 'INSERT INTO webinars (title, date, duration, presenters, takeaways) VALUES (?, ?, ?, ?, ?)';
//   db.query(query, [title, date, duration, presenters, takeawaysJSON], (err, result) => {
//     if (err) {
//       console.error('Error inserting webinar:', err);
//       return res.status(500).send('Error inserting webinar');
//     }
//     res.send('<p>Webinar added successfully! <a href="/admin/add-webinar">Add another</a></p>');
//   });
// });

// MySQL connection pool setup
// MySQL connection pool setup
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'business_form',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promise-based pool for handling queries
const promisePool = pool.promise();

// POST route to handle form submission
app.post('/admin/add-webinar', async (req, res) => {
  const { title, date, duration, presenters, takeaways } = req.body;
  
  // Split takeaways into an array and remove empty entries
  const takeawaysArray = takeaways.split('\n').map(item => item.trim()).filter(Boolean);
  
  // Convert the array into a JSON string
  const takeawaysJSON = JSON.stringify(takeawaysArray);

  try {
    // Start a transaction to ensure both queries (delete and insert) are executed atomically
    const connection = await promisePool.getConnection();
    await connection.beginTransaction();

    // First, delete all previous webinars
    await connection.execute('DELETE FROM webinars');

    // Now, insert the new webinar
    const query = 'INSERT INTO webinars (title, date, duration, presenters, takeaways) VALUES (?, ?, ?, ?, ?)';
    await connection.execute(query, [title, date, duration, presenters, takeawaysJSON]);

    // Commit the transaction if everything went fine
    await connection.commit();

    // Send success response
    res.send('<p>Webinar added successfully! <a href="/admin/add-webinar">Add another</a></p>');
  } catch (err) {
    console.error('Error inserting webinar:', err);
    res.status(500).send('Error inserting webinar');
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
