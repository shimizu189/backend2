const { Loan } = require('./models');
// Borrow controllers
const getBorrows = (req, res, next) => {
    // Retrieve all borrows
      Loan.findAll()
          .then(loans => {
          res.json(loans);
          })
          .catch(err => {
          res.status(500).send('An error occurred while fetching borrows');
          });
  };
  
  const createBorrow = (req, res, next) => {
    // Create a new borrow
      Loan.create(req.body)
          .then(loan => {
          res.json(loan);
          })
          .catch(err => {
          res.status(500).send('An error occurred while creating a borrow');
          });
  };
  
  const getSingleBorrow = (req, res, next) => {
    // Retrieve a single borrow by id
      Loan.findByPk(req.params.id)
          .then(loan => {
          res.json(loan);
          })
          .catch(err => {
          res.status(500).send('An error occurred while fetching a borrow');
          });
  };
  
  const updateBorrow = (req, res, next) => {
    // Update a borrow by id
      Loan.update(req.body, { where: { id: req.params.id } })
          .then(() => {
          res.json({ message: 'Borrow updated successfully' });
          })
          .catch(err => {
          res.status(500).send('An error occurred while updating a borrow');
          });
  };
  
  const deleteBorrow = (req, res, next) => {
    // Delete a borrow by id
      Loan.destroy({ where: { id: req.params.id } })
          .then(() => {
          res.json({ message: 'Borrow deleted successfully' });
          })
          .catch(err => {
          res.status(500).send('An error occurred while deleting a borrow');
          });
  };
  