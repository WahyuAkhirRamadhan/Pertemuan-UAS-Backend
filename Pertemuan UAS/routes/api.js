// Import Patient Controller
const PatientController = require("../controllers/PatientController");

// Membuat router modular
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Express");
});

// Membuat rounting untuk Patients
router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
router.put("/patients/:id", PatientController.update);
router.delete("/patients/:id", PatientController.destroy);
router.get("/patients/:id", PatientController.show);

router.get("/patients/:id", PatientController.show);
// menangkap data rescource
router.get("/patients/search/:name", PatientController.search);
//Menangkap data positive
router.get("/patients/status/positive", PatientController.positive);
//menangkap data recovered 
router.get("/patients/status/recovered", PatientController.recovered);
//menangkap data dead
router.get("/patients/status/dead", PatientController.dead);

// Export router
module.exports = router;