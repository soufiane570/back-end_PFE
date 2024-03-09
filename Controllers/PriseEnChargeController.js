// PriseEnChargeController.js
const PriseEnChargeModel = require('..//Models/PriseEnChargeModel');

const PriseEnChargeController = {
  addPriseEnCharge: (req, res) => {
    const { dateDebut, dateFin } = req.body;
    PriseEnChargeModel.addPriseEnCharge(dateDebut, dateFin, (err, result) => {
      if (err) {
        console.error('Error adding prise en charge:', err);
        res.status(500).json({ message: 'Error adding prise en charge' });
        return;
      }
      console.log('Prise en charge added to database:', result);
      res.json({ message: 'Prise en charge added successfully' });
    });
  },
  getAllPriseEnCharge: (req, res) => {
    PriseEnChargeModel.getAllPriseEnCharge((err, results) => {
      if (err) {
        console.error('Error getting prise en charge:', err);
        res.status(500).json({ message: 'Error getting prise en charge' });
        return;
      }
      res.json(results);
    });
  },
  getPriseEnChargeById: (req, res) => {
    const { idPriseEnCharge } = req.params;
    PriseEnChargeModel.getPriseEnChargeById(idPriseEnCharge, (err, result) => {
      if (err) {
        console.error('Error getting prise en charge by id:', err);
        res.status(500).json({ message: 'Error getting prise en charge by id' });
        return;
      }
      if (!result) {
        res.status(404).json({ message: 'Prise en charge not found' });
        return;
      }
      res.json(result);
    });
  },
  updatePriseEnCharge: (req, res) => {
    const { idPriseEnCharge } = req.params;
    const { dateDebut, dateFin } = req.body;
    PriseEnChargeModel.updatePriseEnCharge(idPriseEnCharge, dateDebut, dateFin, (err, result) => {
      if (err) {
        console.error('Error updating prise en charge:', err);
        res.status(500).json({ message: 'Error updating prise en charge' });
        return;
      }
      console.log('Prise en charge updated in database:', result);
      res.json({ message: 'Prise en charge updated successfully' });
    });
  },
  deletePriseEnCharge: (req, res) => {
    const { idPriseEnCharge } = req.params;
    PriseEnChargeModel.deletePriseEnCharge(idPriseEnCharge, (err, result) => {
      if (err) {
        console.error('Error deleting prise en charge:', err);
        res.status(500).json({ message: 'Error deleting prise en charge' });
        return;
      }
      console.log('Prise en charge deleted from database:', result);
      res.json({ message: 'Prise en charge deleted successfully' });
    });
  }
};

module.exports = PriseEnChargeController;
