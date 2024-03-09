const connection = require("./db.js") ;

const CategorieMaterielModel = {
  addCategorieMateriel: (numCategorieMat, designation, typeMateriel, caracteristique, quantite, callback) => {
    const sql = 'INSERT INTO CategorieMateriel (numCategorieMat, designation, typeMateriel, caracteristique, quantite) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [numCategorieMat, designation, typeMateriel, caracteristique, quantite], callback);
  },

  getAllCategorieMateriel: (callback) => {
    const sql = 'SELECT * FROM CategorieMateriel';
    connection.query(sql, callback);
  },

  getCategorieMaterielByNum: (numCategorieMat, callback) => {
    const sql = 'SELECT * FROM CategorieMateriel WHERE numCategorieMat = ?';
    connection.query(sql, [numCategorieMat], callback);
  },

  updateCategorieMateriel: (numCategorieMat, designation, typeMateriel, caracteristique, quantite, callback) => {
    const sql = 'UPDATE CategorieMateriel SET designation = ?, typeMateriel = ?, caracteristique = ?, quantite = ? WHERE numCategorieMat = ?';
    connection.query(sql, [designation, typeMateriel, caracteristique, quantite, numCategorieMat], callback);
  },

  deleteCategorieMateriel: (numCategorieMat, callback) => {
    const sql = 'DELETE FROM CategorieMateriel WHERE numCategorieMat = ?';
    connection.query(sql, [numCategorieMat], callback);
  }
};

module.exports = CategorieMaterielModel;
