import {
  useEffect,
  useState,
} from "react";

import API from "../api/axios";

function StatusUpdate() {
  const [complaints, setComplaints] =
    useState([]);

  const fetchComplaints =
    async () => {
      const res = await API.get(
        "/complaints"
      );

      setComplaints(res.data);
    };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus =
    async (id, status) => {
      await API.put(
        `/complaints/${id}`,
        {
          status,
        }
      );

      fetchComplaints();
    };

  return (
    <div className="container">
      <h2>
        Update Complaint Status
      </h2>

      {complaints.map(
        (complaint) => (
          <div
            className="status-card"
            key={complaint._id}
          >
            <h3>
              {complaint.title}
            </h3>

            <p>
              {
                complaint.description
              }
            </p>

            <p>
              <b>
                Current Status:
              </b>{" "}
              {
                complaint.status
              }
            </p>

            <select
              value={
                complaint.status
              }
              onChange={(e) =>
                updateStatus(
                  complaint._id,
                  e.target.value
                )
              }
            >
              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Resolved">
                Resolved
              </option>
            </select>
          </div>
        )
      )}
    </div>
  );
}

export default StatusUpdate;