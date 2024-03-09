const connection = require("./db") ;

// Fonction pour vérifier si l'utilisateur existe dans la base de données
exports.getUserByEmail = (email, callback) => {
  connection.query('SELECT * FROM Personnel WHERE email = ?', [email], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results[0]);
  });
};

// Fonction pour mettre à jour le code de vérification de l'utilisateur
exports.updateVerificationCode = (email, code, callback) => {
  connection.query('UPDATE Personnel SET verification_code = ? WHERE email = ?', [code, email], (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null);
  });
};

// Fonction pour mettre à jour le mot de passe de l'utilisateur
exports.updatePassword = (email, newPassword, callback) => {
  connection.query('UPDATE Personnel SET password = ? WHERE email = ?', [newPassword, email], (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null);
  });
};
