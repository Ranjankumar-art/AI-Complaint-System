function ComplaintCard({ complaint, onDelete }) {
  return (
    <div className="card">
      <h3>{complaint.title}</h3>

      <p>
        <b>Name:</b> {complaint.name}
      </p>

      <p>
        <b>Email:</b> {complaint.email}
      </p>

      <p>
        <b>Description:</b>{" "}
        {complaint.description}
      </p>

      <p>
        <b>Category:</b>{" "}
        {complaint.category}
      </p>

      <p>
        <b>Location:</b>{" "}
        {complaint.location}
      </p>

      <p>
        <b>Status:</b>{" "}
        <span className="status">
          {complaint.status}
        </span>
      </p>

      <button
        className="delete-btn"
        onClick={() =>
          onDelete(complaint._id)
        }
      >
        Delete
      </button>
    </div>
  );
}

export default ComplaintCard;