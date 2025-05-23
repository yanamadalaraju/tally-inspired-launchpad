const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
require('dotenv').config();

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
  database: 'bussiness_form'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bussiness_form',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = pool.promise();

function generateWebinarCard(webinar) {
  const takeawaysHTML = webinar.takeaways.map(item => `<li>✅ ${item}</li>`).join('');
  return `
    <div style="border:1px solid #ddd; padding:20px; border-radius:8px; margin-top:20px; background:#f9f9f9; font-family:sans-serif">
      <h2 style="color:#2e7d32;">🎓 Upcoming Webinar: ${webinar.title}</h2>
      <p><strong>📅 Date:</strong> ${webinar.date}</p>
      <p><strong>🕒 Time:</strong> ${webinar.time}</p>
      <p><strong>⏱ Duration:</strong> ${webinar.duration}</p>
      <p><strong>🎙 Presenters:</strong> ${webinar.presenters}</p>
      <p><strong>🎯 Key Takeaways:</strong></p>
      <ul style="padding-left: 20px; color: #333;">${takeawaysHTML}</ul>
    </div>
  `;
}


// app.post('/submit-form', async (req, res) => {
//   const { name, email, phone, pincode, role, businessType } = req.body;
//   console.log('Form Data:', req.body);

//   try {
//   const [rows] = await promisePool.query(`SELECT * FROM webinars ORDER BY id DESC LIMIT 1`);

//   // Handle no webinar found
//   if (!rows || rows.length === 0) {
//     return res.status(404).json({ message: 'No webinars available.' });
//   }

//   const latestWebinar = rows[0];

//   // Safely parse takeaways
//   let parsedTakeaways = [];
//   try {
//     parsedTakeaways = latestWebinar.takeaways ? JSON.parse(latestWebinar.takeaways) : [];
//   } catch (parseErr) {
//     console.warn('Invalid JSON in takeaways:', parseErr);
//     parsedTakeaways = [];
//   }

//   const webinarData = {
//     ...latestWebinar,
//     takeaways: parsedTakeaways
//   };

//   const webinarCardHTML = generateWebinarCard(webinarData);


//     const transporter = nodemailer.createTransport({
//       host: 'mail.mcrindia.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER || 'info@mcrindia.com',
//         pass: process.env.EMAIL_PASS || 'Wha@Mc6TGreen',
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     const mailOptions = {
//       from: '"MCR India" <info@mcrindia.com>',
//       to: email || 'backup@example.com',
//       subject: '✅ You’re Successfully Registered for the MCRT Webinar!',
//       html: `
//       <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9f9f9; padding: 30px;">
//         <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 30px;">
//           <h2 style="color: #1b5e20; margin-top: 0;">👋 Hello ${name},</h2>
//           <p style="font-size: 16px; color: #444;">
//             Thank you for registering for our upcoming <strong>MCRT Webinar</strong>. We're excited to have you with us!
//             Please find the event details below:
//           </p>

//           ${webinarCardHTML}

//           <h3 style="color: #1e88e5; margin-top: 30px;">📝 Your Registration Summary</h3>
//           <table style="width: 100%; font-size: 15px; margin-top: 10px; border-collapse: collapse;">
//             <tr><td><strong>👤 Role:</strong></td><td>${role}</td></tr>
//             <tr><td><strong>🏢 Business Type:</strong></td><td>${businessType}</td></tr>
//             <tr><td><strong>📞 Phone:</strong></td><td>${phone}</td></tr>
//             <tr><td><strong>📍 Pincode:</strong></td><td>${pincode}</td></tr>
//           </table>

//           <div style="margin-top: 30px; text-align: center;">
//             <a href="https://chat.whatsapp.com/KyXpyUh6BBcBCIrWDr1i1T" target="_blank" style="background-color: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 15px;">
//               👉 Join Our WhatsApp Group
//             </a>
//           </div>

//           <p style="font-size: 15px; color: #555; margin-top: 30px;">
//             We look forward to your participation. Keep an eye on your inbox for updates and reminders as the event approaches.
//           </p>

//           <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

//           <p style="font-size: 14px; color: #888;">
//             Warm regards,<br />
//             <strong>MCRT Indian Private Limited Team</strong>
//           </p>
//         </div>
//       </div>
//       `
//     };

//     const info = await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Email sent!', info });

//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, message: 'Failed to send email', error: error.toString() });
//   }
// });

app.post('/submit-form', async (req, res) => {
    const { name, email, phone, pincode, role, businessType, webinar_id} = req.body;
  try {
      const [rows] = await promisePool.query(`SELECT * FROM webinars ORDER BY id DESC LIMIT 1`);
    const latestWebinar = rows[0];

    if (!latestWebinar) {
      return res.status(500).json({ message: 'No webinars available to display.' });
    }

    const webinarData = {
      ...latestWebinar,
      takeaways: JSON.parse(latestWebinar.takeaways || '[]')
    };

    const webinarCardHTML = generateWebinarCard(webinarData);

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.mcrindia.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'info@mcrindia.com', // Use environment variables
        pass: process.env.EMAIL_PASS || 'Wha@Mc6TGreen',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content
   const mailOptions = {
  from: '"MCR India" <info@mcrindia.com>',
  to: email || 'uppalahemanth4@gmail.com',
  subject: ' ✅You’re Successfully Registered for the MCRT Webinar!',
   html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9f9f9; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 30px;">
        <h2 style="color: #1b5e20; margin-top: 0;">👋 Hello ${name},</h2>
        <p style="font-size: 16px; color: #444;">
          Thank you for registering for our upcoming <strong>MCRT Webinar</strong>. We're excited to have you with us!
          Please find the event details below:
        </p>

        <!-- 🟢 Webinar Details First -->
        ${webinarCardHTML}

        <!-- 👤 Registration Details -->
        <h3 style="color: #1e88e5; margin-top: 30px;">📝 Your Registration Summary</h3>
        <table style="width: 100%; font-size: 15px; margin-top: 10px; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0;"><strong>👤 Role:</strong></td>
            <td style="padding: 8px 0;">${role}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>🏢 Business Type:</strong></td>
            <td style="padding: 8px 0;">${businessType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>📞 Phone:</strong></td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>📍 Pincode:</strong></td>
            <td style="padding: 8px 0;">${pincode}</td>
          </tr>
        </table>
        <!-- WhatsApp Group Invitation -->
<div style="margin-top: 30px; text-align: center;">
  <a href="https://chat.whatsapp.com/KyXpyUh6BBcBCIrWDr1i1T" target="_blank" style="background-color: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 15px; display: inline-block;">
    👉 Join Our WhatsApp Group
  </a>
</div>

        <p style="font-size: 15px; color: #555; margin-top: 30px;">
          We look forward to your participation. Keep an eye on your inbox for updates and reminders as the event approaches.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 14px; color: #888;">
          Warm regards,<br />
          <strong>MCRT Indian Private Limited Team</strong><br />
          <a href=" " target="_blank" style="color: #1e88e5; text-decoration: none;"> </a>
        </p>
      </div>
    </div>
  `
};


    // Send email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!', info });
     const insertQuery = 'INSERT INTO registrations (role, name, phone, email, pincode, business_type,webinar_id) VALUES (?, ?, ?, ?, ?, ?,?)';
    await promisePool.query(insertQuery, [role, name, phone, email, pincode, businessType,webinar_id]);

    res.status(200).json({ message: '✅ Mail sent successfully and form saved' });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ message: 'Failed to send email or save form' });
  }
});

// working api

// app.post('/submit-form', async (req, res) => {
//   const { name, email, phone, pincode, role, businessType, webinar_id} = req.body;

//   try {
//     // Configure transporter
//     const transporter = nodemailer.createTransport({
//       host: 'mail.mcrindia.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER || 'info@mcrindia.com',
//         pass: process.env.EMAIL_PASS || 'Wha@Mc6TGreen',
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     // Construct email content dynamically
//     const mailOptions = {
//       from: '"MCR India" <info@mcrindia.com>',
//       to: email || 'uppalahemanth4@gmail.com', // Default recipient if not provided
//       subject: 'You’re Successfully Registered for the MCRT Webinar!',
//       text: `Hello,\n\nThis is a test email.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPincode: ${pincode}\nRole: ${role}\nBusiness Type: ${businessType}\nWebinar ID: ${webinar_id}`,
    

//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Email sent!', info });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, message: 'Failed to send email', error: error.toString() });
//   }
// });


// app.post('/submit-form', async (req, res) => {
//   const { name, email, phone, pincode, role, businessType,webinar_id } = req.body;
//   console.log('Form data:', req.body);

//   try {
    // const [rows] = await promisePool.query(`SELECT * FROM webinars ORDER BY id DESC LIMIT 1`);
    // const latestWebinar = rows[0];

    // if (!latestWebinar) {
    //   return res.status(500).json({ message: 'No webinars available to display.' });
    // }

    // const webinarData = {
    //   ...latestWebinar,
    //   takeaways: JSON.parse(latestWebinar.takeaways || '[]')
    // };

    // const webinarCardHTML = generateWebinarCard(webinarData);

   

//      const transporter = nodemailer.createTransport({
//       host: 'mail.mcrindia.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER || 'info@mcrindia.com', // Use environment variables
//         pass: process.env.EMAIL_PASS || 'Wha@Mc6TGreen',
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

// const mailOptions = {
//   from: `${process.env.EMAIL_USER}>`,
//   to: email,
//   subject: '✅ You’re Successfully Registered for the MCRT Webinar!',
//   html: `
//     <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9f9f9; padding: 30px;">
//       <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 30px;">
//         <h2 style="color: #1b5e20; margin-top: 0;">👋 Hello ${name},</h2>
//         <p style="font-size: 16px; color: #444;">
//           Thank you for registering for our upcoming <strong>MCRT Webinar</strong>. We're excited to have you with us!
//           Please find the event details below:
//         </p>

//         <!-- 🟢 Webinar Details First -->
//         ${webinarCardHTML}

//         <!-- 👤 Registration Details -->
//         <h3 style="color: #1e88e5; margin-top: 30px;">📝 Your Registration Summary</h3>
//         <table style="width: 100%; font-size: 15px; margin-top: 10px; border-collapse: collapse;">
//           <tr>
//             <td style="padding: 8px 0;"><strong>👤 Role:</strong></td>
//             <td style="padding: 8px 0;">${role}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px 0;"><strong>🏢 Business Type:</strong></td>
//             <td style="padding: 8px 0;">${businessType}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px 0;"><strong>📞 Phone:</strong></td>
//             <td style="padding: 8px 0;">${phone}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px 0;"><strong>📍 Pincode:</strong></td>
//             <td style="padding: 8px 0;">${pincode}</td>
//           </tr>
//         </table>
//         <!-- WhatsApp Group Invitation -->
// <div style="margin-top: 30px; text-align: center;">
//   <a href="https://chat.whatsapp.com/KyXpyUh6BBcBCIrWDr1i1T" target="_blank" style="background-color: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 15px; display: inline-block;">
//     👉 Join Our WhatsApp Group
//   </a>
// </div>

//         <p style="font-size: 15px; color: #555; margin-top: 30px;">
//           We look forward to your participation. Keep an eye on your inbox for updates and reminders as the event approaches.
//         </p>

//         <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

//         <p style="font-size: 14px; color: #888;">
//           Warm regards,<br />
//           <strong>MCRT Indian Private Limited Team</strong><br />
//           <a href=" " target="_blank" style="color: #1e88e5; text-decoration: none;"> </a>
//         </p>
//       </div>
//     </div>
//   `
// };
// console.log('Sending email to:', email);
//     console.log('Email HTML content:', mailOptions.html); 
    


//     await transporter.sendMail(mailOptions);

//     // Save to DB
//     const insertQuery = 'INSERT INTO registrations (role, name, phone, email, pincode, business_type,webinar_id) VALUES (?, ?, ?, ?, ?, ?,?)';
//     await promisePool.query(insertQuery, [role, name, phone, email, pincode, businessType,webinar_id]);

//     res.status(200).json({ message: '✅ Mail sent successfully and form saved' });
//   } catch (error) {
//     console.error('❌ Email sending failed:', error);
//     res.status(500).json({ message: 'Failed to send email or save form' });
//   }
// });

// app.post('/submit-form', async (req, res) => {
//   const { name, email, phone, pincode, role, businessType, webinar_id } = req.body;

//   try {
//     const [rows] = await promisePool.query(`SELECT * FROM webinars ORDER BY id DESC LIMIT 1`);
//     const latestWebinar = rows[0];

//     if (!latestWebinar) {
//       return res.status(500).json({ message: 'No webinars available to display.' });
//     }

//     const webinarData = {
//       ...latestWebinar,
//       takeaways: JSON.parse(latestWebinar.takeaways || '[]')
//     };

//     const webinarCardHTML = generateWebinarCard(webinarData);


//     const transporter = nodemailer.createTransport({
//   host: 'mail.mcrindia.com', // or use the specific SMTP server from cPanel
//   port: 465, // or 587 if using TLS
//   secure: true, // true for port 465, false for 587
//   auth: {
//     user: 'info@mcrindia.com', // your cPanel email
//     pass: 'Wha@Mc6TGreen',   // your cPanel email password
//   },
//   tls: {
//     rejectUnauthorized: false   // Optional: helps avoid self-signed cert issues
//   }
// });


//     // const transporter = nodemailer.createTransport({
//     //   host: 'mail.mcrindia.com',
//     //   port: 465,
//     //   secure: true,
//     //   auth: {
//     //     user: 'info@mcrindia.com',
//     //     pass: 'Wha@Mc6TGreen'
//     //   },
//     //   tls: {
//     //     rejectUnauthorized: false
//     //   }
//     // });

//     const mailOptions = {
//   from: '"MCRT India" <info@yourdomain.com>',
//   to: 'recipient@example.com',
//   subject: 'Test Email from CPanel SMTP',
//   html: '<h1>This is a test email from cPanel SMTP server</h1>',
// };

//     console.log('Sending email to:', email);
//     console.log('Email HTML content:', mailOptions.html);

//     transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error('Error sending mail:', error);
//   } else {
//     console.log('Email sent:', info.response);
//   }
// });
//     const insertQuery = 'INSERT INTO registrations (role, name, phone, email, pincode, business_type, webinar_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
//     await promisePool.query(insertQuery, [role, name, phone, email, pincode, businessType, webinar_id]);

//     res.status(200).json({ message: '✅ Mail sent successfully and form saved' });
//   } catch (error) {
//     console.error('❌ Error:', error);
//     console.error('Failed to send email to:', email);
//     console.error('Email content:', mailOptions.html);
    
//     res.status(500).json({ 
//       message: 'Failed to send email or save form',
//       error: error.message,
//       stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
//     });
//   }
// });

// app.post('/submit-form', async (req, res) => {
//   const { name, email, phone, pincode, role, businessType, webinar_id } = req.body;

//   try {
//     const [rows] = await promisePool.query(`SELECT * FROM webinars ORDER BY id DESC LIMIT 1`);
//     const latestWebinar = rows[0];

//     if (!latestWebinar) {
//       return res.status(500).json({ message: 'No webinars available to display.' });
//     }

//     const webinarData = {
//       ...latestWebinar,
//       takeaways: JSON.parse(latestWebinar.takeaways || '[]')
//     };

//     const webinarCardHTML = generateWebinarCard(webinarData);

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS
//       },
//       tls: { rejectUnauthorized: false }
//     });

//     const mailOptions = {
//       from: `"MCRT India" <${process.env.SMTP_USER}>`,
//       to: email,
//       replyTo: process.env.SMTP_USER,
//       subject: '✅ You’re Successfully Registered for the MCRT Webinar!',
//       envelope: {
//         from: process.env.SMTP_USER,
//         to: email
//       },
//       html: `
//         <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9f9f9; padding: 30px;">
//           <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 30px;">
//             <h2 style="color: #1b5e20;">👋 Hello ${name},</h2>
//             <p style="font-size: 16px;">Thank you for registering for our upcoming <strong>MCRT Webinar</strong>.</p>
//             ${webinarCardHTML}
//             <h3 style="color: #1e88e5;">📝 Your Registration Summary</h3>
//             <table style="width: 100%; font-size: 15px;">
//               <tr><td><strong>👤 Role:</strong></td><td>${role}</td></tr>
//               <tr><td><strong>🏢 Business Type:</strong></td><td>${businessType}</td></tr>
//               <tr><td><strong>📞 Phone:</strong></td><td>${phone}</td></tr>
//               <tr><td><strong>📍 Pincode:</strong></td><td>${pincode}</td></tr>
//             </table>
//             <div style="margin-top: 30px; text-align: center;">
//               <a href="https://chat.whatsapp.com/KyXpyUh6BBcBCIrWDr1i1T" target="_blank" style="background-color: #25D366; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none;">
//                 👉 Join Our WhatsApp Group
//               </a>
//             </div>
//             <p style="margin-top: 30px; font-size: 15px;">We look forward to your participation!</p>
//             <hr style="margin: 30px 0;" />
//             <p style="font-size: 14px; color: #888;">
//               Warm regards,<br />
//               <strong>MCRT Indian Private Limited Team</strong>
//             </p>
//           </div>
//         </div>`
//     };

//     console.log('Sending email to:', email);
//     const info = await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent successfully:', info.messageId);

//     await promisePool.query(
//       'INSERT INTO registrations (role, name, phone, email, pincode, business_type, webinar_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
//       [role, name, phone, email, pincode, businessType, webinar_id]
//     );

//     res.status(200).json({ message: '✅ Email sent and form saved' });
//   } catch (error) {
//     console.error('❌ Error:', error.message);
//     res.status(500).json({ message: 'Failed to send email or save form', error: error.message });
//   }
// });


app.get('/get-registrations', (req, res) => {
  db.query('SELECT * FROM registrations ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).send('Error fetching data');
    res.status(200).json(results);
  });
});

app.put('/update-registration', (req, res) => {
  const { id, role, name, phone, email, pincode, business_type } = req.body;
  const query = `
    UPDATE registrations
    SET role = ?, name = ?, phone = ?, email = ?, pincode = ?, business_type = ?
    WHERE id = ?`;
  db.query(query, [role, name, phone, email, pincode, business_type, id], (err, result) => {
    if (err) return res.status(500).send({ success: false });
    res.status(200).send({ success: true });
  });
});

app.delete('/delete-registration/:id', (req, res) => {
  db.query('DELETE FROM registrations WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send({ success: false });
    res.status(200).send({ success: true });
  });
});

app.get('/webinars/recent', (req, res) => {
  db.query(
    'SELECT * FROM webinars ORDER BY date DESC, time DESC LIMIT 1',
    (err, results) => {
      if (err) {
        console.error('Error fetching recent webinar:', err);
        return res.status(500).send('Error fetching recent webinar');
      }
      
      if (results.length === 0) {
        return res.status(404).json({ message: 'No webinars found' });
      }
      
      // Parse takeaways if they're stored as JSON string
      const webinar = {
        ...results[0],
        takeaways: results[0].takeaways ? JSON.parse(results[0].takeaways) : []
      };
      
      res.status(200).json(webinar);
    }
  );
});


app.get('/webinars', (req, res) => {
  db.query('SELECT * FROM webinars ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).send('Error fetching webinar data');
    res.status(200).json(results);
  });
});

app.post('/admin/add-webinar', async (req, res) => {
  const { title, date, time, duration, presenters, takeaways } = req.body;
  const takeawaysArray = takeaways.split('\n').map(i => i.trim()).filter(Boolean);
  const takeawaysJSON = JSON.stringify(takeawaysArray);

  try {
    const connection = await promisePool.getConnection();
    await connection.beginTransaction();

    // Get the highest current webinar_id and compute next one
    const [maxIdResult] = await connection.execute(
      'SELECT MAX(CAST(webinar_id AS UNSIGNED)) as maxId FROM webinars'
    );
    const nextId = maxIdResult[0].maxId
      ? String(parseInt(maxIdResult[0].maxId) + 1).padStart(3, '0')
      : '001';

    // Insert new webinar (without deleting previous ones)
    await connection.execute(
      'INSERT INTO webinars (webinar_id, title, date, time, duration, presenters, takeaways) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nextId, title, date, time, duration, presenters, takeawaysJSON]
    );

    await connection.commit();
    res.send({ message: 'Webinar added successfully', webinar_id: nextId });
  } catch (err) {
    console.error('Error inserting webinar:', err);
    res.status(500).send('Error inserting webinar');
  }
});


//-------->first one
// app.post('/admin/add-webinar', async (req, res) => {
//   const { title, date, time, duration, presenters, takeaways } = req.body;
//   const takeawaysArray = takeaways.split('\n').map(i => i.trim()).filter(Boolean);
//   const takeawaysJSON = JSON.stringify(takeawaysArray);

//   try {
//     const connection = await promisePool.getConnection();
//     await connection.beginTransaction();
//     await connection.execute('DELETE FROM webinars');
//     await connection.execute('INSERT INTO webinars (title, date, time, duration, presenters, takeaways) VALUES (?, ?, ?, ?, ?, ?)',
//       [title, date, time, duration, presenters, takeawaysJSON]);
//     await connection.commit();
//     res.send('Webinar added successfully');
//   } catch (err) {
//     console.error('Error inserting webinar:', err);
//     res.status(500).send('Error inserting webinar');
//   }
// });
// app.post('/admin/add-webinar', async (req, res) => {
//   const { title, date, time, duration, presenters, takeaways } = req.body;
//   const takeawaysArray = takeaways.split('\n').map(i => i.trim()).filter(Boolean);
//   const takeawaysJSON = JSON.stringify(takeawaysArray);

//   try {
//     const connection = await promisePool.getConnection();
//     await connection.beginTransaction();
    
//     // Get the highest current webinar_id
//     const [maxIdResult] = await connection.execute(
//       'SELECT MAX(CAST(webinar_id AS UNSIGNED)) as maxId FROM webinars'
//     );
//     const nextId = maxIdResult[0].maxId ? 
//       String(parseInt(maxIdResult[0].maxId) + 1).padStart(3, '0') : 
//       '001';
    
//     // Insert new webinar without deleting existing ones
//     await connection.execute(
//       'INSERT INTO webinars (webinar_id, title, date, time, duration, presenters, takeaways) VALUES (?, ?, ?, ?, ?, ?, ?)',
//       [nextId, title, date, time, duration, presenters, takeawaysJSON]
//     );
    
//     await connection.commit();
//     res.send({ message: 'Webinar added successfully', webinar_id: nextId });
//   } catch (err) {
//     console.error('Error inserting webinar:', err);
//     res.status(500).send('Error inserting webinar');
//   }
// });
app.put('/admin/edit-webinar/:id', async (req, res) => {
  const { id } = req.params;
  const { title, date, time, duration, presenters, takeaways } = req.body;
  const takeawaysArray = takeaways.split('\n').map(i => i.trim()).filter(Boolean);
  const takeawaysJSON = JSON.stringify(takeawaysArray);

  try {
    const query = 'UPDATE webinars SET title = ?, date = ?, time = ?, duration = ?, presenters = ?, takeaways = ? WHERE id = ?';
    const [result] = await promisePool.execute(query, [title, date, time, duration, presenters, takeawaysJSON, id]);

    if (result.affectedRows === 0) {
      res.status(404).send('Webinar not found');
    } else {
      res.send('Webinar updated successfully');
    }
  } catch (err) {
    console.error('Error updating webinar:', err);
    res.status(500).send('Error updating webinar');
  }
});

// app.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err) => {
//     if (err) {
//       if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ message: 'Email already exists' });
//       return res.status(500).json({ message: 'Database error' });
//     }
//     res.status(200).json({ message: 'User registered successfully' });
//   });
// });

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
