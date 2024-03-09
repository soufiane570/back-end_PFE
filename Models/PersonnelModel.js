const connection = require("./db.js") ;

const PersonnelModel = {
  addPersonnel: (newPersonnel, callback) => {
    const { matricule, nom, prenom, tel, imagePersonnel, fonction, secteur } = newPersonnel;
    const sql = 'INSERT INTO Personnel (matricule, nom, prenom, tel, imagePersonnel, fonction, secteur) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [matricule, nom, prenom, tel, imagePersonnel, fonction, secteur], callback);
  },
  
  getAllPersonnel: (callback) => {
    const sql = 'SELECT * FROM Personnel';
    connection.query(sql, callback);
  },
  
  getPersonnelByMatricule: (matricule, callback) => {
    const sql = 'SELECT * FROM Personnel WHERE matricule = ?';
    connection.query(sql, [matricule], callback);
  },
  
  updatePersonnel: (matricule, updatedPersonnel, callback) => {
    const { nom, prenom, tel, imagePersonnel, fonction, secteur } = updatedPersonnel;
    const sql = 'UPDATE Personnel SET nom = ?, prenom = ?, tel = ?, imagePersonnel = ?, fonction = ?, secteur = ? WHERE matricule = ?';
    connection.query(sql, [nom, prenom, tel, imagePersonnel, fonction, secteur, matricule], callback);
  },
  
  deletePersonnel: (matricule, callback) => {
    const sql = 'DELETE FROM Personnel WHERE matricule = ?';
    connection.query(sql, [matricule], callback);
  },
// liste personnel prenant en charge un matériel donné
  findPersonnelByMaterialId: (idMateriel, callback) => {
    const sql = `
      SELECT p.*
      FROM Personnel p
      INNER JOIN Signer s ON p.matricule = s.matricule
      INNER JOIN PriseEnCharge pe ON s.idPriseEnCharge = pe.idPriseEnCharge
      INNER JOIN Materiel m ON pe.idPriseEnCharge = m.idPriseEnCharge
      WHERE m.idMateriel = ?;
    `;

    connection.query(sql, [idMateriel], callback);
}

};

module.exports = PersonnelModel;
