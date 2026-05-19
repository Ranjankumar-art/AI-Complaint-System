import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Complaint System</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/add-complaint">
          Add Complaint
        </Link>

        <Link to="/complaints">
          Complaints
        </Link>

        <Link to="/status">
          Update Status
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;