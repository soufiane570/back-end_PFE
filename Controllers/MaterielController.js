// MaterielController.js
const MaterielModel = require('../Models/MaterielModel');

const MaterielController = {
  addMateriel: (req, res) => {
    const { idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel } = req.body;
    MaterielModel.addMateriel(idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel, (err, result) => {
      if (err) {
        console.error('Error adding materiel:', err);
        res.status(500).json({ message: 'Error adding materiel' });
        return;
      }
      console.log('Materiel added to database:', result);
      res.json({ message: 'Materiel added successfully' });
    });
  },
  getAllMateriel: (req, res) => {
    MaterielModel.getAllMateriel((err, results) => {
      if (err) {
        console.error('Error getting materiel:', err);
        res.status(500).json({ message: 'Error getting materiel' });
        return;
      }
      res.json(results);
    });
  },
  getMaterielById: (req, res) => {
    const { idMateriel } = req.params;
    MaterielModel.getMaterielById(idMateriel, (err, result) => {
      if (err) {
        console.error('Error getting materiel by id:', err);
        res.status(500).json({ message: 'Error getting materiel by id' });
        return;
      }
      if (!result) {
        res.status(404).json({ message: 'Materiel not found' });
        return;
      }
      res.json(result);
    });
  },
  updateMateriel: (req, res) => {
    const { idMateriel } = req.params;
    const { idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel } = req.body;
    MaterielModel.updateMateriel(idMateriel, idLocale, numCategorieMat, idPriseEnCharge, codeBarre, numSerie, dateReception, dateMiseEnServise, etat, imageMateriel, (err, result) => {
      if (err) {
        console.error('Error updating materiel:', err);
        res.status(500).json({ message: 'Error updating materiel' });
        return;
      }
      console.log('Materiel updated in database:', result);
      res.json({ message: 'Materiel updated successfully' });
    });
  },
  deleteMateriel: (req, res) => {
    const { idMateriel } = req.params;
    MaterielModel.deleteMateriel(idMateriel, (err, result) => {
      if (err) {
        console.error('Error deleting materiel:', err);
        res.status(500).json({ message: 'Error deleting materiel' });
        return;
      }
      console.log('Materiel deleted from database:', result);
      res.json({ message: 'Materiel deleted successfully' });
    });
  },
  // liste du matériel situé dans local donné
  getMaterielByLocaleId: (req, res) => {
    const {idLocale} = req.params;
    MaterielModel.getMaterielByLocaleId(idLocale, (err, materiel) => {
        if (err) {
            console.error('Error fetching materiel:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        res.json(materiel);
    });
},
// Connaitre la liste du matériel pris en charge par un personnel donné
getMaterielByPersonnelId: (req, res) => {
  const {matricule} = req.params;
  MaterielModel.getMaterielByPersonnelId(matricule, (err, materiel) => {
      if (err) {
          console.error('Error fetching materiel:', err);
          res.status(500).json({ message: 'Internal server error' });
          return;
      }
      res.json(materiel);
  });
}
};

module.exports = MaterielController;
