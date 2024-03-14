const User = require('../Models/userModel');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
// Créer un transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre_email@gmail.com',
    pass: 'votre_mot_de_passe'
  }
});

// Fonction pour envoyer le code de vérification par e-mail
exports.sendVerificationCode = async (req, res) => {
  const { email } = req.body;
  User.getUserByEmail(email, (error, user) => {
    if (error) {
      return res.status(500).json({ message: 'Une erreur s\'est produite.' });
    }

    if (!user) {
      return res.status(404).json({ message: 'Cet email n\'est pas dans la base de données.' });
    }

    const verificationCode = randomstring.generate({
        length: 6,
        charset: 'numeric'
    });

    User.updateVerificationCode(email, verificationCode, (error) => {
      if (error) {
        return res.status(500).json({ message: 'Une erreur s\'est produite.' });
      }

      const mailOptions = {
        from: 'votre_email@gmail.com',
        to: email,
        subject: 'Code de vérification',
        text: `Votre code de vérification est : ${verificationCode}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'envoi de l\'email.' });
        }
        res.status(200).json({ message: 'Code de vérification envoyé avec succès.' });
      });
    });
  });
};

// Fonction pour vérifier le code de vérification
exports.verifyCode = async (req, res) => {
  const { email, code } = req.body;

  User.getUserByEmail(email, (error, user) => {
    if (error) {
      return res.status(500).json({ message: 'Une erreur s\'est produite.' });
    }

    if (!user || user.verification_code !== code) {
      return res.json({ success: false });
    }

    res.json({ success: true });
  });
};

// Fonction pour réinitialiser le mot de passe
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  User.updatePassword(email, newPassword, (error) => {
    if (error) {
      return res.status(500).json({ message: 'Une erreur s\'est produite.' });
    }
    res.status(200).json({ message: 'Mot de passe réinitialisé avec succès.' });
  });
};
