const CategorieMaterielModel = require('../Models/CategorieMaterielModel');

const CategorieMaterielController = {
  addCategorieMateriel: (req, res) => {
    const { numCategorieMat,designation, typeMateriel, caracteristique, quantite } = req.body;
    CategorieMaterielModel.addCategorieMateriel(numCategorieMat, designation, typeMateriel, caracteristique, quantite, (err, result) => {
      if (err) {
        console.error('Error adding categorie materiel:', err);
        res.status(500).json({ message: 'Error adding categorie materiel' });
        return;
      }
      console.log('Categorie materiel added to database:', result);
      res.json({ message: 'Categorie materiel added successfully' });
    });
  },
  getAllCategorieMateriel: (req, res) => {
    CategorieMaterielModel.getAllCategorieMateriel((err, results) => {
      if (err) {
        console.error('Error getting categorie materiel:', err);
        res.status(500).json({ message: 'Error getting categorie materiel' });
        return;
      }
      res.json(results);
    });
  },
  getCategorieMaterielByNum: (req, res) => {
    const { numCategorieMat } = req.params;
    CategorieMaterielModel.getCategorieMaterielByNum(numCategorieMat, (err, result) => {
      if (err) {
        console.error('Error getting categorie materiel by number:', err);
        res.status(500).json({ message: 'Error getting categorie materiel by number' });
        return;
      }
      if (!result) {
        res.status(404).json({ message: 'Categorie materiel not found' });
        return;
      }
      res.json(result);
    });
  },
  updateCategorieMateriel: (req, res) => {
    const { numCategorieMat } = req.params;
    const { designation, typeMateriel, caracteristique, quantite } = req.body;
    CategorieMaterielModel.updateCategorieMateriel(numCategorieMat, designation, typeMateriel, caracteristique, quantite, (err, result) => {
      if (err) {
        console.error('Error updating categorie materiel:', err);
        res.status(500).json({ message: 'Error updating categorie materiel' });
        return;
      }
      console.log('Categorie materiel updated in database:', result);
      res.json({ message: 'Categorie materiel updated successfully' });
    });
  },
  deleteCategorieMateriel: (req, res) => {
    const { numCategorieMat } = req.params;
    CategorieMaterielModel.deleteCategorieMateriel(numCategorieMat, (err, result) => {
      if (err) {
        console.error('Error deleting categorie materiel:', err);
        res.status(500).json({ message: 'Error deleting categorie materiel' });
        return;
      }
      console.log('Categorie materiel deleted from database:', result);
      res.json({ message: 'Categorie materiel deleted successfully' });
    });
  }
};

module.exports = CategorieMaterielController;
