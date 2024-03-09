// l'importation

const express = require('express');
const router = express.Router();
const articleController = require('../Controllers/articleController.js.js');
const PersonnelController = require('../Controllers/PersonnelController.js');
const PriseEnChargeController = require('../Controllers/PriseEnChargeController.js');
const CategorieMaterielController = require('../Controllers/CategorieMaterielController.js');
const LocaleController = require('../Controllers/LocalController.js');
const MaterielController = require('../Controllers/MaterielController.js');
const TransfertController = require('../Controllers/TransfertController.js');
const PanneController = require('../Controllers/PanneController.js');
const userController = require('../Controllers/userController.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.post('/article', articleController.addArticle);
router.get('/article', articleController.getAllArticles);
router.get('/article/:barcode', articleController.getArticleById);
router.put('/article/:barcode', articleController.updateArticle);
router.delete('/article/:barcode', articleController.deleteArticle);
// table personne
router.post('/personnel', PersonnelController.addPersonnel);
router.get('/personnel', PersonnelController.getAllPersonnel);
router.get('/personnel/:matricule', PersonnelController.getPersonnelByMatricule);
router.put('/personnel/:matricule', PersonnelController.updatePersonnel);
router.delete('/personnel/:matricule', PersonnelController.deletePersonnel);
// table priseEnCharge
router.post('/priseencharge', PriseEnChargeController.addPriseEnCharge);
router.get('/priseencharge', PriseEnChargeController.getAllPriseEnCharge);
router.get('/priseencharge/:idPriseEnCharge', PriseEnChargeController.getPriseEnChargeById);
router.put('/priseencharge/:idPriseEnCharge', PriseEnChargeController.updatePriseEnCharge);
router.delete('/priseencharge/:idPriseEnCharge', PriseEnChargeController.deletePriseEnCharge);
// table CategorieMateriel
router.post('/categorie', CategorieMaterielController.addCategorieMateriel);
router.get('/categorie', CategorieMaterielController.getAllCategorieMateriel);
router.get('/categorie/:numCategorieMat', CategorieMaterielController.getCategorieMaterielByNum);
router.put('/categorie/:numCategorieMat', CategorieMaterielController.updateCategorieMateriel);
router.delete('/categorie/:numCategorieMat', CategorieMaterielController.deleteCategorieMateriel);
// table locale
router.post('/locale', LocaleController.addLocale);
router.get('/locale', LocaleController.getAllLocale);
router.get('/locale/:idLocale', LocaleController.getLocaleById);
router.put('/locale/:idLocale', LocaleController.updateLocale);
router.delete('/locale/:idLocale', LocaleController.deleteLocale);
// table materiel
router.post('/materiel', MaterielController.addMateriel);
router.get('/materiel', MaterielController.getAllMateriel);
router.get('/materiel/:idMateriel', MaterielController.getMaterielById);
router.put('/materiel/:idMateriel', MaterielController.updateMateriel);
router.delete('/materiel/:idMateriel', MaterielController.deleteMateriel);
// table transfert
router.post('/transfert', TransfertController.addTransfert);
router.get('/transfert', TransfertController.getAllTransfert);
router.get('/transfert/:idTransfert', TransfertController.getTransfertById);
router.put('/transfert/:idTransfert', TransfertController.updateTransfert);
router.delete('/transfert/:idTransfert', TransfertController.deleteTransfert);
// table panne 
router.post('/panne', PanneController.addPanne);
router.get('/panne', PanneController.getAllPannes);
router.get('/panne/:idPanne', PanneController.getPanneById);
router.put('/panne/:idPanne', PanneController.updatePanne);
router.delete('/panne/:idPanne', PanneController.deletePanne);
// liste personnel prenant en charge un matériel donné
router.get('/personnel/material/:idMateriel', PersonnelController.getPersonnelByMaterialId);
// liste du matériel situé dans local donné
router.get('/materiel/locale/:idLocale', MaterielController.getMaterielByLocaleId);
// Connaitre la liste du matériel pris en charge par un personnel donné
router.get('/materiel/personnel/:matricule', MaterielController.getMaterielByPersonnelId);
// Historique de pannes d’un matériel donné
router.get('/panne/materiel/:idMateriel', PanneController.getPannesByMaterielId);
// mot de pass oublié
router.post('/send-verification-code', userController.sendVerificationCode);
router.post('/verify-code', userController.verifyCode);
router.post('/reset-password', authMiddleware.verifyCodeMiddleware, userController.resetPassword);



module.exports = router;







// module.exports = router;
module.exports = router;

