const { User, Item, Loan } = require('./models');

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