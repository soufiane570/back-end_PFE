// articleModel.js
const connection = require("./db.js") ;
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'pfe'
// });

const articleModel = {
  addArticle: (barcode, name, callback) => {
    const sql = 'INSERT INTO articles (barcode, name) VALUES (?, ?)';
    connection.query(sql, [barcode, name], callback);
  },
  getAllArticles: (callback) => {
    const sql = 'SELECT * FROM articles';
    connection.query(sql, callback);
  },
  getArticleById: (barcode, callback) => {
    const sql = 'SELECT * FROM articles WHERE barcode = ?';
    connection.query(sql, [barcode], callback);
  },
  updateArticle: (barcode, data, callback) => {
    const sql = 'UPDATE articles SET ? WHERE barcode = ?';
    connection.query(sql, [data, barcode], callback);
  },
  deleteArticle: (barcode, callback) => {
    const sql = 'DELETE FROM articles WHERE barcode = ?';
    connection.query(sql, [barcode], callback);
  }
};

module.exports = articleModel;
