const connection = require("./db.js") ;


const PriseEnChargeModel = {
  addPriseEnCharge: (dateDebut, dateFin, callback) => {
    const sql = 'INSERT INTO PriseEnCharge (dateDebut, dateFin) VALUES (?, ?)';
    connection.query(sql, [dateDebut, dateFin], callback);
  },

  getAllPriseEnCharge: (callback) => {
    const sql = 'SELECT * FROM PriseEnCharge';
    connection.query(sql, callback);
  },

  getPriseEnChargeById: (idPriseEnCharge, callback) => {
    const sql = 'SELECT * FROM PriseEnCharge WHERE idPriseEnCharge = ?';
    connection.query(sql, [idPriseEnCharge], callback);
  },

  updatePriseEnCharge: (idPriseEnCharge, dateDebut, dateFin, callback) => {
    const sql = 'UPDATE PriseEnCharge SET dateDebut = ?, dateFin = ? WHERE idPriseEnCharge = ?';
    connection.query(sql, [dateDebut, dateFin, idPriseEnCharge], callback);
  },

  deletePriseEnCharge: (idPriseEnCharge, callback) => {
    const sql = 'DELETE FROM PriseEnCharge WHERE idPriseEnCharge = ?';
    connection.query(sql, [idPriseEnCharge], callback);
  }
};

module.exports = PriseEnChargeModel;
