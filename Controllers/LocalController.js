
// LocaleController.js
const LocaleModel = require('../Models/LocalModel');

const LocaleController = {
  addLocale: (req, res) => {
    const { typeLocale } = req.body;
    LocaleModel.addLocale(typeLocale, (err, result) => {
      if (err) {
        console.error('Error adding locale:', err);
        res.status(500).json({ message: 'Error adding locale' });
        return;
      }
      console.log('Locale added to database:', result);
      res.json({ message: 'Locale added successfully' });
    });
  },
  getAllLocale: (req, res) => {
    LocaleModel.getAllLocale((err, results) => {
      if (err) {
        console.error('Error getting locale:', err);
        res.status(500).json({ message: 'Error getting locale' });
        return;
      }
      res.json(results);
    });
  },
  getLocaleById: (req, res) => {
    const { idLocale } = req.params;
    LocaleModel.getLocaleById(idLocale, (err, result) => {
      if (err) {
        console.error('Error getting locale by id:', err);
        res.status(500).json({ message: 'Error getting locale by id' });
        return;
      }
      if (!result) {
        res.status(404).json({ message: 'Locale not found' });
        return;
      }
      res.json(result);
    });
  },
  updateLocale: (req, res) => {
    const { idLocale } = req.params;
    const { typeLocale } = req.body;
    LocaleModel.updateLocale(idLocale, typeLocale, (err, result) => {
      if (err) {
        console.error('Error updating locale:', err);
        res.status(500).json({ message: 'Error updating locale' });
        return;
      }
      console.log('Locale updated in database:', result);
      res.json({ message: 'Locale updated successfully' });
    });
  },
  deleteLocale: (req, res) => {
    const { idLocale } = req.params;
    LocaleModel.deleteLocale(idLocale, (err, result) => {
      if (err) {
        console.error('Error deleting locale:', err);
        res.status(500).json({ message: 'Error deleting locale' });
        return;
      }
      console.log('Locale deleted from database:', result);
      res.json({ message: 'Locale deleted successfully' });
    });
  }
};

module.exports = LocaleController;
