const express = require("express");

const router = express.Router();

const {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
  searchComplaint
} = require("../controllers/complaintController");

router.post("/", addComplaint);

router.get("/", getComplaints);

router.put("/:id", updateComplaintStatus);

router.delete("/:id", deleteComplaint);

router.get("/search/location", searchComplaint);

module.exports = router;