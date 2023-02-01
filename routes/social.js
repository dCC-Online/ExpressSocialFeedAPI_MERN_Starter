const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  updateById,
  create,
  deleteById,
} = require("../controllers/controllers.js");

//Build your endpoints here
//!NOTE: when calling any of the functions in lines 4-8, you MUST use the "await" keyword.

module.exports = router;
