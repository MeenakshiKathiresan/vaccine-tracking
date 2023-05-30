const router = require("express").Router();
const Patient = require("../models/patient.model");
const PatientRecord = require("../models/patientRecord.model");

// Read all patients
router.route("/").get(async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// Read a specific patient by ID and populate patient records
router.route("/:id").get(async (req, res) => {
  try {
    const patientId = req.params.id;
    const patient = await Patient.findById(patientId);
    const patientRecords = await PatientRecord.find({ patient: patientId });
    const patientWithRecords = { ...patient.toObject(), patientRecords };
    res.json(patientWithRecords);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// Add a new patient
router.route("/add").post(async (req, res) => {
  const { name, age, bloodGroup, gender, contact, email, image, medicalHistory, allergies } = req.body;
  const newPatient = new Patient({
    name,
    age,
    bloodGroup,
    gender,
    contact,
    email,
    image,
    medicalHistory,
    allergies,
  });

  try {
    const savedPatient = await newPatient.save();
    res.json(savedPatient);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// Update a patient
router.route("/update/:id").put(async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatient);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// Delete a patient
router.route("/:id").delete(async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json("Patient deleted.");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/:patientId/records/add").post(async (req, res) => {
    try {
      const { patientId } = req.params;
      const { recordNumber, bloodPressure, heartRate, temperature, respiratoryRate, medication, observation } = req.body;
  
      const newRecord = new PatientRecord({
        patientID: patientId,
        recordNumber,
        vitals: {
          bloodPressure,
          heartRate,
          temperature,
          respiratoryRate
        },
        medication,
        observation,
      });
  
      const savedRecord = await newRecord.save();
      res.json(savedRecord);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });
  
  router.route("/records/:recordId/edit").put(async (req, res) => {
    try {
      const { recordId } = req.params;
      const { recordNumber, bloodPressure, heartRate, temperature, respiratoryRate, medication, observation } = req.body;
  
      const updatedRecord = await PatientRecord.findByIdAndUpdate(
        recordId,
        {
          recordNumber,
          vitals: {
            bloodPressure,
            heartRate,
            temperature,
            respiratoryRate
          },
          medication,
          observation,
        },
        { new: true }
      );
  
      res.json(updatedRecord);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });

  router.route("/records/:recordId/delete").delete(async (req, res) => {
    try {
      const { recordId } = req.params;
  
      await PatientRecord.findByIdAndDelete(recordId);
  
      res.json("Record deleted.");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });
  
  

module.exports = router;
