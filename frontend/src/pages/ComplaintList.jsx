import { useEffect, useState } from "react";
import API from "../api/axios";
import ComplaintCard from "../components/ComplaintCard";

function ComplaintList() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const res = await API.get("/complaints");
      setComplaints(res.data);
    } catch (error) {
      alert("Failed to fetch complaints");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const deleteComplaint = async (id) => {
    try {
      await API.delete(`/complaints/${id}`);
      fetchComplaints();
    } catch (error) {
      alert("Delete failed");
      console.log(error);
    }
  };

  const filteredComplaints = complaints.filter((item) => {
    const itemLocation = item.location || "";
    const itemCategory = item.category || "";

    return (
      itemLocation.toLowerCase().includes(search.toLowerCase()) &&
      itemCategory.toLowerCase().includes(category.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h2>All Complaints</h2>

      <div className="filters">
        <input
          placeholder="Search by location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Electricity">Electricity</option>
          <option value="Garbage">Garbage</option>
          <option value="Road">Road</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {loading && <p>Loading complaints...</p>}

      {!loading && filteredComplaints.length === 0 && (
        <p>No complaints found</p>
      )}

      <div className="grid">
        {filteredComplaints.map((complaint) => (
          <ComplaintCard
            key={complaint._id}
            complaint={complaint}
            onDelete={deleteComplaint}
          />
        ))}
      </div>
    </div>
  );
}

export default ComplaintList;