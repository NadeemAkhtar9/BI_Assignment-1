import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";
import "bootstrap/dist/css/bootstrap.min.css";

const EventListing = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("https://bi-assignment-1-backend-iota.vercel.app/meetups");
  const [searchQuery, setSearchQuery] = useState("");
  const [eventType, setEventType] = useState("Both");

  // Filter events based on the search query and event type
  const filteredData = data?.filter((meetUp) => {
    const typeMatch =
      eventType === "Both" ||
      meetUp.typeOfEvent.toLowerCase() === eventType.toLowerCase();

    const titleMatch = meetUp.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const tagsMatch = meetUp.tags?.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return typeMatch && (titleMatch || tagsMatch);
  });

  return (
    <div className="container">
      <h1 className="my-4">All Meetups</h1>

      {/* Header with Search and Dropdown */}
      <div className="d-flex justify-content-between mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by Title or Tags"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="form-select w-25"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="Both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      <div className="row">
        {filteredData?.map((meetUp, index) => (
          <div className="col-md-4 mb-4" key={meetUp._id}>
            <div
              className="card"
              onClick={() => navigate(`/event/${index + 1}`)} // Use index + 1 for numeric IDs
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative">
                <img
                  src={meetUp.imageUrl}
                  alt={meetUp.title}
                  className="card-img-top"
                  width="100%"
                  height="200"
                />
                <span className="badge text-dark bg-white border border-dark position-absolute top-0 start-0 m-2">
                  {meetUp.typeOfEvent} Event
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">{meetUp.title}</h5>
                <p className="card-text">Date: {meetUp.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
