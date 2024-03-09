const connection = require("./db.js") ;

const LocaleModel = {
  addLocale: (typeLocale, callback) => {
    const sql = 'INSERT INTO Locale (typeLocale) VALUES (?)';
    connection.query(sql, [typeLocale], callback);
  },

  getAllLocale: (callback) => {
    const sql = 'SELECT * FROM Locale';
    connection.query(sql, callback);
  },

  getLocaleById: (idLocale, callback) => {
    const sql = 'SELECT * FROM Locale WHERE idLocale = ?';
    connection.query(sql, [idLocale], callback);
  },

  updateLocale: (idLocale, typeLocale, callback) => {
    const sql = 'UPDATE Locale SET typeLocale = ? WHERE idLocale = ?';
    connection.query(sql, [typeLocale, idLocale], callback);
  },

  deleteLocale: (idLocale, callback) => {
    const sql = 'DELETE FROM Locale WHERE idLocale = ?';
    connection.query(sql, [idLocale], callback);
  }
};

module.exports = LocaleModel;
