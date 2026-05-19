const Complaint = require("../models/Complaint");

const addComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found"
      });
    }

    complaint.status = req.body.status || complaint.status;

    const updated = await complaint.save();

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);

    res.json({
      message: "Complaint deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const searchComplaint = async (req, res) => {
  try {
    const location = req.query.location;

    const complaints = await Complaint.find({
      location: {
        $regex: location,
        $options: "i"
      }
    });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
  searchComplaint
};