// articleController.js

const articleModel = require('../Models/articleModel');

const articleController = {
  addArticle: (req, res) => {
    const { barcode, name } = req.body;
    articleModel.addArticle(barcode, name, (err, result) => {
      if (err) {
        console.error('Error adding article:', err);
        res.status(500).json({ message: 'Error adding article' });
        return;
      }
      console.log('Article added to database:', result);
      res.json({ message: 'Article added successfully' });
    });
  },
  getAllArticles: (req, res) => {
    articleModel.getAllArticles((err, results) => {
      if (err) {
        console.error('Error getting articles:', err);
        res.status(500).json({ message: 'Error getting articles' });
        return;
      }
      res.json(results);
    });
  },
  getArticleById: (req, res) => {
    const { barcode } = parseInt(req.params);
    articleModel.getArticleById(barcode , (err, results) => {
      if (err) {
        console.error('Error getting article:', err);
        res.status(500).json({ message: 'Error getting article' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ message: 'Article not found' });
        return;
      }
      res.json(results[0]);
    });
  },
  updateArticle: (req, res) => {
    const { barcode } = req.params;
    articleModel.updateArticle(barcode, req.body, (err, result) => {
      if (err) {
        console.error('Error updating article:', err);
        res.status(500).json({ message: 'Error updating article' });
        return;
      }
      console.log('Article updated in database:', result);
      res.json({ message: 'Article updated successfully' });
    });
  },
  deleteArticle: (req, res) => {
    const { barcode } = req.params;
    articleModel.deleteArticle(barcode, (err, result) => {
      if (err) {
        console.error('Error deleting article:', err);
        res.status(500).json({ message: 'Error deleting article' });
        return;
      }
      console.log('Article deleted from database:', result);
      res.json({ message: 'Article deleted successfully' });
    });
  }
};

module.exports = articleController;
