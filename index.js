// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// const PORT = 3000;
// const connection = mysql.createConnection({
//   host: 'localhost', 
//   user: 'root', 
//   password: '', 
//   database: 'pfe' 
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // let articles = [];

// app.post('/add-article', (req, res) => {
//   const { barcode, name } = req.body;
//   const sql = 'INSERT INTO articles (barcode, name) VALUES (?, ?)';
//   connection.query(sql, [barcode, name], (err, result) => {
//     if (err) {
//       console.error('Error adding article:', err);
//       res.status(500).json({ message: 'Error adding article' });
//       return;
//     }
//     console.log('Article added to database:', result);
//     res.json({ message: 'Article added successfully' });
//   });
// });
// // Get all articles
// app.get('/articles', (req, res) => {
//   const sql = 'SELECT * FROM articles';
//   connection.query(sql, (err, results) => {
//     if (err) {
//       console.error('Error getting articles:', err);
//       res.status(500).json({ message: 'Error getting articles' });
//       return;
//     }
//     res.json(results);
//   });
// });
// // Get a specific article
// app.get('/articles/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = 'SELECT * FROM articles WHERE barcode = ?';
//   connection.query(sql, [id], (err, results) => {
//     if (err) {
//       console.error('Error getting article:', err);
//       res.status(500).json({ message: 'Error getting article' });
//       return;
//     }
//     if (results.length === 0) {
//       res.status(404).json({ message: 'Article not found' });
//       return;
//     }
//     res.json(results[0]);
//   });
// });
// // Update an article
// app.put('/articles/:barcode', (req, res) => {
//   const { barcode } = req.params;
//   // const { barcode, name } = req.body;
//   const sql = 'UPDATE articles SET barcode = ?, name = ? WHERE barcode = ?';
//   connection.query(sql, req.body, (err, result) => {
//     if (err) {
//       console.error('Error updating article:', err);
//       res.status(500).json({ message: 'Error updating article' });
//       return;
//     }
//     console.log('Article updated in database:', result);
//     res.json({ message: 'Article updated successfully' });
//   });
// });

// // Delete an article
// app.delete('/articles/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = 'DELETE FROM articles WHERE id = ?';
//   connection.query(sql, [id], (err, result) => {
//     if (err) {
//       console.error('Error deleting article:', err);
//       res.status(500).json({ message: 'Error deleting article' });
//       return;
//     }
//     console.log('Article deleted from database:', result);
//     res.json({ message: 'Article deleted successfully' });
//   });
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// // const bodyParser = require('body-parser');
// // app.use(bodyParser.json());



// app.js

const express = require('express');
const app = express();
const PORT = 3000;
const Routes = require('./Routes/ApiRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

