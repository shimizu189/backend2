const { User } = require('./models');

//alle controller einzeln machen, also stall controller.js 3 mal kopieren und dann jeweils die funktionen anpassen

// User controllers
const getUsers = (req, res, next) => {
  // Retrieve all users
    User.findAll()
        .then(users => {
        res.json(users);
        })
        .catch(err => {
        res.status(500).send('An error occurred while fetching users');
        });

};

const createUser = (req, res, next) => {
  // Create a new user
    User.create(req.body)
        .then(user => {
        res.json(user);
        })
        .catch(err => {
        res.status(500).send('An error occurred while creating a user');
        });
};

const getUser = (req, res, next) => {
  // Retrieve a single user by id
    User.findByPk(req.params.id)
        .then(user => {
        res.json(user);
        })
        .catch(err => {
        res.status(500).send('An error occurred while fetching a user');
        });
};

const updateUser = (req, res, next) => {
  // Update a user by id
    User.update(req.body, { where: { id: req.params.id } })
        .then(() => {
        res.json({ message: 'User updated successfully' });
        })
        .catch(err => {
        res.status(500).send('An error occurred while updating a user');
        });
};

const deleteUser = (req, res, next) => {
  // Delete a user by id
    User.destroy({ where: { id: req.params.id } })
        .then(() => {
        res.json({ message: 'User deleted successfully' });
        })
        .catch(err => {
        res.status(500).send('An error occurred while deleting a user');
        });
};



module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getEquipment,
  createEquipment,
  getSingleEquipment,
  updateEquipment,
  deleteEquipment,
  getBorrows,
  createBorrow,
  getSingleBorrow,
  updateBorrow,
  deleteBorrow,
};