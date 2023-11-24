const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000; 


app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "Root@2",
  password: "root",
  database: "ecommerce",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection error: " + err);
  } else {
    console.log("Connected to the database");
  }
});

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  const sql = "INSERT INTO registration (username, password, email) VALUES (?, ?, ?)";
  db.query(sql, [username, password, email], (err, result) => {
    if (err) {
      console.log("Database error: " + err);
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(500).send("User already registered");
      } else {
        res.status(500).send("Error registering user");
      }
    } else {
      res.status(200).send("User registered successfully");
    }
  });
});
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const sql = "SELECT * FROM registration WHERE username = ? AND password = ?";
//   db.query(sql, [username, password], (err, results) => {
//     if (err) {
//       console.log("Database error: " + err);
//       res.status(500).send("Error verifying login");
//     } else {
//       if (results.length > 0) {
//         res.status(200).json({ message: 'Login successful' });
//       } else {
//         res.status(401).send("Invalid credentials");
//       }
//     }
//   });
// });

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt for user: " + username);
 
  const sql = 'SELECT * FROM registration WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log("Database error: " + err);
      res.status(500).json({ success: false, message: "Error during login" });
    } else {
      if (result.length > 0) {
        res.status(200).json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    }
  });
});

app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  const sql = 'SELECT * FROM registration WHERE username = ?';
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.log('Database error:', err);
      res.status(500).json({ success: false, message: 'Error fetching user profile' });
    } else {
      if (result.length > 0) {
        res.status(200).json({ success: true, userProfile: result[0] });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    }
  });
});

app.delete('/users/:username', (req, res) => {
  const username = req.params.username; // Retrieve the username from the request parameters
  const sql = 'DELETE FROM registration WHERE username = ?';
  console.log(username)
  // Use the username to perform deletion in your database
  // Replace this with your database logic to delete the user based on the username
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ success: false, message: 'Error deleting user' });
    } else {
      // Check if any rows were affected to determine if the user was deleted successfully
      if (result.affectedRows > 0) {
        res.status(200).json({ success: true, message: 'User deleted successfully' });
      } else {
        res.status(404).json({ success: false, message: 'User not found or already deleted' });
      }
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
