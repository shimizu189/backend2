const {Item} = require('./models');

// Equipment controllers
const getEquipment = (req, res, next) => {
    // Retrieve all equipment
      Item.findAll()
              .then(items => {
              res.json(items);
              })
              .catch(err => {
              res.status(500).send('An error occurred while fetching equipment');
              });
  };
  
  const createEquipment = (req, res, next) => {
    // Create new equipment
      Item.create(req.body)
          .then(item => {
          res.json(item);
          })
          .catch(err => {
          res.status(500).send('An error occurred while creating equipment');
          });
  };
  
  const getSingleEquipment = (req, res, next) => {
    // Retrieve a single equipment item by id
      Item.findByPk(req.params.id)
          .then(item => {
          res.json(item);
          })
          .catch(err => {
          res.status(500).send('An error occurred while fetching an equipment item');
          });
  };
  
  const updateEquipment = (req, res, next) => {
    // Update an equipment item by id
      Item.update(req.body, { where: { id: req.params.id } })
          .then(() => {
          res.json({ message: 'Equipment updated successfully' });
          })
          .catch(err => {
          res.status(500).send('An error occurred while updating equipment');
          });
  };
  
  const deleteEquipment = (req, res, next) => {
    // Delete an equipment item by id
      Item.destroy({ where: { id: req.params.id } })
          .then(() => {
          res.json({ message: 'Equipment deleted successfully' });
          })
          .catch(err => {
          res.status(500).send('An error occurred while deleting equipment');
          });
  };