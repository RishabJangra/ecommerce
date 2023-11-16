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
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM registration WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.log("Database error: " + err);
      res.status(500).send("Error verifying login");
    } else {
      if (results.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).send("Invalid credentials");
      }
    }
  });
});



// app.post("/register", (req, res) => {
//   const { username, password, email } = req.body;
//   const sql = "INSERT INTO registration (username, password, email) VALUES (?, ?, ?)";
//   db.query(sql, [username, password, email], (err, result) => {
//     if (err) {
//       console.log("Database error: " + err);
//       res.status(500).send("Error registering user");
//     } else {
//       res.status(200).send("User registered successfully");
//     }
//   });
// });

// app.post('/register', async (req, res) => {
//   try {
//     const { username, password, email } = req.body;
//     // Perform registration logic (e.g., save user to a database)
//     // Replace this with your actual database interaction code
//     // ...

//     res.status(200).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
