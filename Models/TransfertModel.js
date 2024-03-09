const connection = require("./db") ;


const TransfertModel = {
  addTransfert: (idMateriel, dateTransfert, destination, lieu, callback) => {
    const sql = 'INSERT INTO Transfert (idMateriel, dateTransfert, destination, lieu) VALUES (?, ?, ?, ?)';
    connection.query(sql, [idMateriel, dateTransfert, destination, lieu], callback);
  },

  getAllTransfert: (callback) => {
    const sql = 'SELECT * FROM Transfert';
    connection.query(sql, callback);
  },

  getTransfertById: (idTransfert, callback) => {
    const sql = 'SELECT * FROM Transfert WHERE idTransfert = ?';
    connection.query(sql, [idTransfert], callback);
  },

  updateTransfert: (idTransfert, idMateriel, dateTransfert, destination, lieu, callback) => {
    const sql = 'UPDATE Transfert SET idMateriel = ?, dateTransfert = ?, destination = ?, lieu = ? WHERE idTransfert = ?';
    connection.query(sql, [idMateriel, dateTransfert, destination, lieu, idTransfert], callback);
  },

  deleteTransfert: (idTransfert, callback) => {
    const sql = 'DELETE FROM Transfert WHERE idTransfert = ?';
    connection.query(sql, [idTransfert], callback);
  }
};

module.exports = TransfertModel;
