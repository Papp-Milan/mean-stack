const db = require("../models");
const Name = db.names;

// Create and Save a new Name
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Name
  const name = new Name({
    name: req.body.name,
    gender: req.body.gender,
  });

  // Save Name in the database
  name
    .save(name)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Name."
      });
    });
};

// Retrieve all Names from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Name.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Names."
      });
    });
};

// Find a single Name with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Name.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Name with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Name with id=" + id });
    });
};

// Update a Name by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Name.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Name with id=${id}. Maybe Name was not found!`
        });
      } else res.send({ message: "Name was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Name with id=" + id
      });
    });
};

// Delete a Name with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Name.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Name with id=${id}. Maybe Name was not found!`
        });
      } else {
        res.send({
          message: "Name was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Name with id=" + id
      });
    });
};

// Delete all Names from the database.
exports.deleteAll = (req, res) => {
  Name.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Names were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Names."
      });
    });
};
