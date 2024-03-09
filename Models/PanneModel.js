const connection = require("./db") ;


const PanneModel = {
  addPanne: (idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation, callback) => {
    const sql = 'INSERT INTO Panne (idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation], callback);
  },

  getAllPannes: (callback) => {
    const sql = 'SELECT * FROM Panne';
    connection.query(sql, callback);
  },

  getPanneById: (idPanne, callback) => {
    const sql = 'SELECT * FROM Panne WHERE idPanne = ?';
    connection.query(sql, [idPanne], callback);
  },

  updatePanne: (idPanne, idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation, callback) => {
    const sql = 'UPDATE Panne SET idMateriel = ?, typePanne = ?, descriptionPanne = ?, datePanne = ?, causes = ?, reparation = ?, modeReparation = ?, dateReparation = ?, observation = ? WHERE idPanne = ?';
    connection.query(sql, [idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation, idPanne], callback);
  },

  deletePanne: (idPanne, callback) => {
    const sql = 'DELETE FROM Panne WHERE idPanne = ?';
    connection.query(sql, [idPanne], callback);
  },
  // Historique de pannes d’un matériel donné
  getPannesByMaterielId:(idMateriel, callback) => {
    const sql = `SELECT * FROM Panne WHERE idMateriel = ?;`;
    connection.query(sql, [idMateriel], callback);
}
};

module.exports = PanneModel;
