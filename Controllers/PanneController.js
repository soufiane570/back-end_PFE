// PanneController.js
const PanneModel = require('../Models/PanneModel');

const PanneController = {
  addPanne: (req, res) => {
    const { idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation } = req.body;
    PanneModel.addPanne(idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation, (err, result) => {
      if (err) {
        console.error('Error adding panne:', err);
        res.status(500).json({ message: 'Error adding panne' });
        return;
      }
      console.log('Panne added to database:', result);
      res.json({ message: 'Panne added successfully' });
    });
  },
  getAllPannes: (req, res) => {
    PanneModel.getAllPannes((err, results) => {
      if (err) {
        console.error('Error getting pannes:', err);
        res.status(500).json({ message: 'Error getting pannes' });
        return;
      }
      res.json(results);
    });
  },
  getPanneById: (req, res) => {
    const { idPanne } = req.params;
    PanneModel.getPanneById(idPanne, (err, result) => {
      if (err) {
        console.error('Error getting panne by id:', err);
        res.status(500).json({ message: 'Error getting panne by id' });
        return;
      }
      if (!result) {
        res.status(404).json({ message: 'Panne not found' });
        return;
      }
      res.json(result);
    });
  },
  updatePanne: (req, res) => {
    const { idPanne } = req.params;
    const { idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation } = req.body;
    PanneModel.updatePanne(idPanne, idMateriel, typePanne, descriptionPanne, datePanne, causes, reparation, modeReparation, dateReparation, observation, (err, result) => {
      if (err) {
        console.error('Error updating panne:', err);
        res.status(500).json({ message: 'Error updating panne' });
        return;
      }
      console.log('Panne updated in database:', result);
      res.json({ message: 'Panne updated successfully' });
    });
  },
  deletePanne: (req, res) => {
    const { idPanne } = req.params;
    PanneModel.deletePanne(idPanne, (err, result) => {
      if (err) {
        console.error('Error deleting panne:', err);
        res.status(500).json({ message: 'Error deleting panne' });
        return;
      }
      console.log('Panne deleted from database:', result);
      res.json({ message: 'Panne deleted successfully' });
    });
  },
  // Historique de pannes d’un matériel donné
  getPannesByMaterielId: (req, res) => {
    const {idMateriel} = req.params;
    PanneModel.getPannesByMaterielId(idMateriel, (err, pannes) => {
        if (err) {
            console.error('Error fetching pannes:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        res.json(pannes);
    });
}
};

module.exports = PanneController;
