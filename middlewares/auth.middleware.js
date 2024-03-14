const User = require('../Models/userModel');

// const { verifyToken } = require('./auth');
const authMiddleware = {
authenticateToken : (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied. No token provided.');
  const decoded = verifyToken(token);
  if (!decoded) return res.status(403).send('Invalid token.');
  req.user = decoded;
  next();
},

// Middleware pour vérifier le code de vérification
verifyCodeMiddleware : async (req, res, next) => {
  const { email, code } = req.body;
  User.getUserByEmail(email, (error, user) => {
    if (error) {
      return res.status(500).json({ message: 'Une erreur s\'est produite.' });
    }
    if (!user || user.verification_code !== code) {
      return res.status(403).json({ message: 'Accès refusé. Code de vérification invalide.' });
    }
    next();
  });
}
}
module.exports = authMiddleware;