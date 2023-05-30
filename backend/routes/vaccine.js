const router = require("express").Router();
const Vaccine = require("../models/vaccine.model");
const PatientEntry = require("../models/patientEntry.model");

router.route("/add").post(async (req, res) => {
    try {
      const { name, type } = req.body;
  
      const newVaccine = new Vaccine({
        name,
        type,
      });
  
      const savedVaccine = await newVaccine.save();
      res.json(savedVaccine);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });
  

router.route("/:id/edit").put(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, type } = req.body;
  
      const updatedVaccine = await Vaccine.findByIdAndUpdate(
        id,
        {
          name,
          type,
        },
        { new: true }
      );
  
      res.json(updatedVaccine);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });
  
  router.route("/:id").delete(async (req, res) => {
    try {
      const { id } = req.params;
  
      await Vaccine.findByIdAndDelete(id);
      res.json("Vaccine deleted.");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });


  // Add a new patient entry
router.route('/entry/add').post(async (req, res) => {
    const { phase, vaccineID, patientID, status } = req.body;
  
    const newPatientEntry = new PatientEntry({
      phase,
      vaccineID,
      patientID,
      status,
    });
  
    try {
      const savedPatientEntry = await newPatientEntry.save();
      res.json(savedPatientEntry);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });

  // Edit a patient entry
router.route('/entry/edit/:id').put(async (req, res) => {
    try {
      const updatedPatientEntry = await PatientEntry.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedPatientEntry);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });
  
  // Delete a patient entry
  router.route('/entry/delete/:id').delete(async (req, res) => {
    try {
      await PatientEntry.findByIdAndDelete(req.params.id);
      res.json('Patient entry deleted.');
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });
  
  // Get all patient entries for a vaccine
  router.route('/entry/:vaccineID').get(async (req, res) => {
    try {
      const patientEntries = await PatientEntry.find({ vaccineID: req.params.vaccineID });
      res.json(patientEntries);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });
  
module.exports = router