const User = require('../models/userModel');
const base = require('./baseController');



exports.addUser = base.createOne(User)

exports.getAllUsers = base.getAll(User);
exports.getUser = base.getOne(User);

exports.updateUser = base.updateOne(User);
exports.deleteUser = base.deleteOne(User);