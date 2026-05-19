const analyzeComplaint = async (req, res) => {
  try {
    const { description } = req.body;

    let priority = "Low";
    let department = "General";
    let summary = description.substring(0, 50);

    if (description.toLowerCase().includes("water")) {
      department = "Water Department";
    }

    if (description.toLowerCase().includes("electric")) {
      priority = "High";
      department = "Electricity Department";
    }

    if (description.toLowerCase().includes("garbage")) {
      department = "Sanitation Department";
    }

    const responseMessage =
      "Your complaint has been registered successfully.";

    res.json({
      priority,
      department,
      summary,
      responseMessage
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  analyzeComplaint
};