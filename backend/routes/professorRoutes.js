const express = require("express");
const {
  getProfessorById,
  getAllProfessors,
} = require("../controllers/professorController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getAllProfessors);

router.route("/:id").get(protect, getProfessorById);

module.exports = router;
