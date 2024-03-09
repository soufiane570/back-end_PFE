// PersonnelController.js
const PersonnelModel = require('../Models/PersonnelModel');

const PersonnelController = {
  addPersonnel: (req, res) => {
    const newPersonnel = req.body;
    PersonnelModel.addPersonnel(newPersonnel, (err, result) => {
      if (err) {
        console.error('Error adding personnel:', err);
        res.status(500).json({ message: 'Error adding personnel' });
        return;
      }
      console.log('Personnel added to database:', result);
      res.json({ message: 'Personnel added successfully' });
    });
  },
  getAllPersonnel: (req, res) => {
    PersonnelModel.getAllPersonnel((err, results) => {
      if (err) {
        console.error('Error getting personnel:', err);
        res.status(500).json({ message: 'Error getting personnel' });
        return;
      }
      res.json(results);
    });
  },
  getPersonnelByMatricule: (req, res) => {
    const { matricule } = req.params;
    PersonnelModel.getPersonnelByMatricule(matricule, (err, result) => {
      if (err) {
        console.error('Error getting personnel by matricule:', err);
        res.status(500).json({ message: 'Error getting personnel by matricule' });
        return;
      }
      if (result.length ===0 ) {
        res.status(404).json({ message: 'Personnel not found' });
        return ;
      }
      res.json(result);
    });
  },
  updatePersonnel: (req, res) => {
    const { matricule } = req.params;
    const updatedPersonnel = req.body;
    PersonnelModel.updatePersonnel(matricule, updatedPersonnel, (err, result) => {
      if (err) {
        console.error('Error updating personnel:', err);
        res.status(500).json({ message: 'Error updating personnel' });
        return;
      }
      console.log('Personnel updated in database:', result);
      res.json({ message: 'Personnel updated successfully' });
    });
  },
  deletePersonnel: (req, res) => {
    const { matricule } = req.params;
    PersonnelModel.deletePersonnel(matricule, (err, result) => {
      if (err) {
        console.error('Error deleting personnel:', err);
        res.status(500).json({ message: 'Error deleting personnel' });
        return;
      }
      console.log('Personnel deleted from database:', result);
      res.json({ message: 'Personnel deleted successfully' });
    });
  },
  // liste personnel prenant en charge un matériel donné
  getPersonnelByMaterialId: (req, res) => {
    const {idMateriel} = req.params;
    PersonnelModel.findPersonnelByMaterialId(idMateriel, (err, personnel) => {
        if (err) {
            console.error('Error fetching personnel:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        res.json(personnel);
    });
}
};

module.exports = PersonnelController;
