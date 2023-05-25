const { User } = require("../models/model");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      const users = await User.find();
      // await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Delete success!", users });
    } catch (error) {
      res.status(500).json({ msg: "Delete failed!" });
    }
  },
};

module.exports = userController;
