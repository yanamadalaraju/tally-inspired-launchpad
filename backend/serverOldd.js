const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
require('dotenv').config();
 // ✅ Import bcrypt



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


app.post('/submit-form', async (req, res) => {
  const { name, email, phone, pincode, role, businessType } = req.body;

  try {
    // Create the transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,  // Your Gmail address
        pass: process.env.GMAIL_PASS,   // App password from Gmail
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: '🎉 You’re Registered for the MCRT Webinar!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px;">
          <h2 style="color: #2e7d32;">Hi ${name},</h2>
          <p>Thank you for registering for our upcoming webinar! We're excited to have you join us.</p>
    
          <p style="margin-top: 20px;"><strong>Your Registration Details:</strong></p>
          <ul style="line-height: 1.6;">
            <li><strong>Role:</strong> ${role}</li>
            <li><strong>Business Type:</strong> ${businessType}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Pincode:</strong> ${pincode}</li>
          </ul>
    
          <p style="margin-top: 20px;">You will receive the webinar access link and details via email shortly. Please keep an eye on your inbox (and spam folder, just in case).</p>
    
          <p style="margin-top: 30px;">If you have any questions, feel free to <a href="mailto:sales@mcrindia.in" style="color: #1976d2;">contact us</a>.</p>
    
          <p style="margin-top: 30px;">Warm regards,<br /><strong>MCRT Indian Private Limited <br />Team</strong></p>
        </div>
      `
    };
    

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mail sent successfully' });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ message: 'Failed to send email' });
  }
});


// POST route to handle form submission
// app.post('/submit-form', (req, res) => {
//   const { role, name, phone, email, pincode } = req.body;

//   const query = 'INSERT INTO registrations (role, name, phone, email, pincode) VALUES (?, ?, ?, ?, ?)';
//   db.query(query, [role, name, phone, email, pincode], (err, result) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       return res.status(500).send('Error inserting data');
//     }
//     res.status(200).send('Form submitted successfully');
//   });
// });

// // GET route to fetch all form registrations
// app.get('/get-registrations', (req, res) => {
//   const query = 'SELECT * FROM registrations ORDER BY id DESC';
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching data:', err);
//       return res.status(500).send('Error fetching data');
//     }
//     res.status(200).json(results);
//   });
// });

// // PUT route to update a registration
// app.put('/update-registration', (req, res) => {
//   const { id, role, name, phone, email, pincode } = req.body;

//   const query = `
//     UPDATE registrations
//     SET role = ?, name = ?, phone = ?, email = ?, pincode = ?
//     WHERE id = ?
//   `;
//   db.query(query, [role, name, phone, email, pincode, id], (err, result) => {
//     if (err) {
//       console.error('Error updating registration:', err);
//       return res.status(500).send({ success: false, message: 'Error updating registration' });
//     }
//     res.status(200).send({ success: true, message: 'Registration updated successfully' });
//   });
// });

// // DELETE route to remove a registration by ID
// app.delete('/delete-registration/:id', (req, res) => {
//   const { id } = req.params;

//   const query = 'DELETE FROM registrations WHERE id = ?';
//   db.query(query, [id], (err, result) => {
//     if (err) {
//       console.error('Error deleting registration:', err);
//       return res.status(500).send({ success: false, message: 'Error deleting registration' });
//     }
//     res.status(200).send({ success: true, message: 'Registration deleted successfully' });
//   });
// });

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
  const { role, name, phone, email, pincode, businessType } = req.body;

  const query = 'INSERT INTO registrations (role, name, phone, email, pincode, business_type) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [role, name, phone, email, pincode, businessType], (err, result) => {
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
  const { id, role, name, phone, email, pincode, business_type } = req.body;

  const query = `
    UPDATE registrations
    SET role = ?, name = ?, phone = ?, email = ?, pincode = ?, business_type = ?
    WHERE id = ?
  `;
  db.query(query, [role, name, phone, email, pincode, business_type, id], (err, result) => {
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
  const { title, date,time, duration, presenters, takeaways } = req.body;
  
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
    const query = 'INSERT INTO webinars (title, date,time, duration, presenters, takeaways) VALUES (?, ?, ?, ?,?, ?)';
    await connection.execute(query, [title, date,time, duration, presenters, takeawaysJSON]);

    // Commit the transaction if everything went fine
    await connection.commit();

    // Send success response
    res.send('<p>Webinar added successfully! <a href="/admin/add-webinar">Add another</a></p>');
  } catch (err) {
    console.error('Error inserting webinar:', err);
    res.status(500).send('Error inserting webinar');
  }
});

app.put('/admin/edit-webinar/:id', async (req, res) => {
  const { id } = req.params;
  const { title, date, time, duration, presenters, takeaways } = req.body;

  // Prepare takeaways array
  const takeawaysArray = takeaways
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean);
  const takeawaysJSON = JSON.stringify(takeawaysArray);

  try {
    const connection = await promisePool.getConnection();

    const query = `
      UPDATE webinars 
      SET title = ?, date = ?, time = ?, duration = ?, presenters = ?, takeaways = ?
      WHERE id = ?
    `;

    const [result] = await connection.execute(query, [
      title,
      date,
      time,
      duration,
      presenters,
      takeawaysJSON,
      id
    ]);

    if (result.affectedRows === 0) {
      res.status(404).send('Webinar not found');
    } else {
      res.send('<p>Webinar updated successfully! <a href="/admin/edit-webinar">Edit another</a></p>');
    }
  } catch (err) {
    console.error('Error updating webinar:', err);
    res.status(500).send('Error updating webinar');
  }
});



// Register endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, hashedPassword], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already exists' });
      }
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ success: true });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  });
});




// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
