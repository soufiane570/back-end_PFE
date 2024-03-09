const connection = require("./db.js") ;

const MaterielModel = {
  addMateriel: (idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel, callback) => {
    const sql = 'INSERT INTO Materiel (idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel], callback);
  },

  getAllMateriel: (callback) => {
    const sql = 'SELECT * FROM Materiel';
    connection.query(sql, callback);
  },

  getMaterielById: (idMateriel, callback) => {
    const sql = 'SELECT * FROM Materiel WHERE idMateriel = ?';
    connection.query(sql, [idMateriel], callback);
  },

  updateMateriel: (idMateriel, idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel, callback) => {
    const sql = 'UPDATE Materiel SET idLocale = ?, numCategorieMat = ?, idPriseEnCharge = ?, codeBarre = ?, numSerie = ?, dateReception = ?, dateMiseEnServise = ?, etat = ?, imageMateriel = ? WHERE idMateriel = ?';
    connection.query(sql, [idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel, idMateriel], callback);
  },

  deleteMateriel: (idMateriel, callback) => {
    const sql = 'DELETE FROM Materiel WHERE idMateriel = ?';
    connection.query(sql, [idMateriel], callback);
  },
  // liste du matériel situé dans local donné
  getMaterielByLocaleId: (idLocale, callback) => {
    const sql = `SELECT * FROM Materiel WHERE idLocale = ?;`;
    connection.query(sql, [idLocale], callback);
  },
  // Connaitre la liste du matériel pris en charge par un personnel donné
  getMaterielByPersonnelId(matricule, callback) {
    const sql = `SELECT m.* FROM Materiel m
        INNER JOIN PriseEnCharge pe ON m.idPriseEnCharge = pe.idPriseEnCharge
        INNER JOIN Signer s ON pe.idPriseEnCharge = s.idPriseEnCharge
        WHERE s.matricule = ?;`;
    connection.query(sql, [matricule], callback);
}
};

module.exports = MaterielModel;
