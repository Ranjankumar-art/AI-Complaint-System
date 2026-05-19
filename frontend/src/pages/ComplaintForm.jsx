import { useState } from "react";

import API from "../api/axios";

import AIResult from "../components/AIResult";

function ComplaintForm() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      title: "",
      description: "",
      category: "",
      location: "",
    });

  const [aiResult, setAiResult] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const analyzeComplaint =
    async () => {
      try {
        const res =
          await API.post(
            "/ai/analyze",
            {
              description:
                formData.description,
            }
          );

        setAiResult(res.data);
      } catch (error) {
        alert("AI analysis failed");
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/complaints",
        formData
      );

      setMessage(
        "Complaint submitted successfully"
      );

      await analyzeComplaint();

      setFormData({
        name: "",
        email: "",
        title: "",
        description: "",
        category: "",
        location: "",
      });
    } catch (error) {
      alert(
        "Complaint submit failed"
      );
    }
  };

  return (
    <div className="container">
      <h2>Register Complaint</h2>

      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="title"
          placeholder="Complaint Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Complaint Description"
          value={
            formData.description
          }
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Category
          </option>

          <option value="Water Supply">
            Water Supply
          </option>

          <option value="Electricity">
            Electricity
          </option>

          <option value="Garbage">
            Garbage
          </option>

          <option value="Road">
            Road
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Complaint
        </button>
      </form>

      {message && (
        <p className="success">
          {message}
        </p>
      )}

      <AIResult result={aiResult} />
    </div>
  );
}

export default ComplaintForm;