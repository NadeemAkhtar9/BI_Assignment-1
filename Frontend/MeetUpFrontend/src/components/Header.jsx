import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: "red" }}>
          MeetUp
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search By Title and Tags"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
