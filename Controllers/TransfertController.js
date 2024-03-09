// TransfertController.js
const TransfertModel = require('../Models/TransfertModel');

const TransfertController = {
  addTransfert: (req, res) => {
    const { idMateriel, dateTransfert, destination, lieu } = req.body;
    TransfertModel.addTransfert(idMateriel, dateTransfert, destination, lieu, (err, result) => {
      if (err) {
        console.error('Error adding transfert:', err);
        res.status(500).json({ message: 'Error adding transfert' });
        return;
      }
      console.log('Transfert added to database:', result);
      res.json({ message: 'Transfert added successfully' });
    });
  },
  getAllTransfert: (req, res) => {
    TransfertModel.getAllTransfert((err, results) => {
      if (err) {
        console.error('Error getting transfert:', err);
        res.status(500).json({ message: 'Error getting transfert' });
        return;
      }
      res.json(results);
    });
  },
  getTransfertById: (req, res) => {
    const { idTransfert } = req.params;
    TransfertModel.getTransfertById(idTransfert, (err, result) => {
      if (err) {
        console.error('Error getting transfert by id:', err);
        res.status(500).json({ message: 'Error getting transfert by id' });
        return;
      }
      if (!result) {
        res.status(404).json({ message: 'Transfert not found' });
        return;
      }
      res.json(result);
    });
  },
  updateTransfert: (req, res) => {
    const { idTransfert } = req.params;
    const { idMateriel, dateTransfert, destination, lieu } = req.body;
    TransfertModel.updateTransfert(idTransfert, idMateriel, dateTransfert, destination, lieu, (err, result) => {
      if (err) {
        console.error('Error updating transfert:', err);
        res.status(500).json({ message: 'Error updating transfert' });
        return;
      }
      console.log('Transfert updated in database:', result);
      res.json({ message: 'Transfert updated successfully' });
    });
  },
  deleteTransfert: (req, res) => {
    const { idTransfert } = req.params;
    TransfertModel.deleteTransfert(idTransfert, (err, result) => {
      if (err) {
        console.error('Error deleting transfert:', err);
        res.status(500).json({ message: 'Error deleting transfert' });
        return;
      }
      console.log('Transfert deleted from database:', result);
      res.json({ message: 'Transfert deleted successfully' });
    });
  }
};

module.exports = TransfertController;
