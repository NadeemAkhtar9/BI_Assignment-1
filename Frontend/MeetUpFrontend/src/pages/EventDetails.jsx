import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

const EventDetail = () => {
  const { id } = useParams();

  const events = [
    {
      id: 1,
      title: "Tech Conference",
      date: "Thu Jul 13 2023 7:00:00 AM IST",
      typeOfEvent: "Offline",
      tags: ["JavaScript", "Coding", "Frontend"],
      imageUrl: "https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.jpg?s=1024x1024&w=is&k=20&c=kR78Po_VNciNfmStyUBCnvtaIcPWDPPPnBgl-0OlgjM=",
      description: "A Tech Conference focusing on the latest advancements in JavaScript, Coding, and Frontend technologies. A great event for developers and tech enthusiasts to network and learn.",
      sessionTimings: "10:00 AM - 4:00 PM",
      speakers: ["John Doe", "Jane Smith"],
      pricing: "Free Entry",
      venue: "Tech Park Auditorium, 123 Tech St, Silicon Valley",
      additionalInfo: ["Dress code: Casual", "Age restriction: 18+"]
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "Mon Jul 10 2023 2:00:00 PM IST",
      typeOfEvent: "Offline",
      tags: ["Design", "Workshop"],
      imageUrl: "https://images.freeimages.com/images/large-previews/363/little-shipyard-5-1455328.jpg",
      description: "A hands-on workshop for designers, where you can sharpen your design skills and learn about the latest trends in design. A perfect event for anyone in the creative field.",
      sessionTimings: "2:00 PM - 6:00 PM",
      speakers: ["Alice Brown", "Bob Johnson"],
      pricing: "Paid Event - $50",
      venue: "Design Hub, 45 Art St, Creative City",
      additionalInfo: ["Dress code: Casual", "Age restriction: 16+"]
    },
    {
      id: 3,
      title: "Marketing Seminar",
      date: "Mon Jul 10 2023 10:00:00 AM IST",
      typeOfEvent: "Offline",
      tags: ["Marketing", "Seminar", "Sales"],
      imageUrl: "https://media.istockphoto.com/id/1204808940/photo/group-of-business-workers-working-together-in-a-meeting-one-of-them-making-presentation-to.jpg?s=1024x1024&w=is&k=20&c=QUvNobE308WAyloPJHhPx6bzsBWCmeEO-5AzmA4nxIw=",
      description: "A seminar aimed at enhancing your marketing and sales skills. Learn from industry experts on how to create successful marketing strategies and boost sales performance.",
      sessionTimings: "10:00 AM - 2:00 PM",
      speakers: ["Michael Johnson", "Sarah Lee"],
      pricing: "Free Entry",
      venue: "Marketing Hall, 78 Business Ave, Commerce City",
      additionalInfo: ["Dress code: Business Casual", "Age restriction: 21+"]
    },
    {
      id: 4,
      title: "Public Speaking Seminar",
      date: "Tue Aug 15 2023 10:00:00 AM IST",
      typeOfEvent: "Online",
      tags: ["Communication", "Speaking"],
      imageUrl: "https://media.istockphoto.com/id/1436667849/photo/businesswoman-answering-questions-during-a-business-conference.jpg?s=1024x1024&w=is&k=20&c=qX2t_WSo39c6nuAoVPuV-IbevXIaWg3960ovnlDA53I=",
      description: "An online seminar focusing on improving public speaking and communication skills. A must-attend for anyone looking to enhance their speaking abilities for professional or personal growth.",
      sessionTimings: "10:00 AM - 12:00 PM",
      speakers: ["Emma Brown", "Oliver King"],
      pricing: "Paid Event - $30",
      venue: "Online (Zoom link will be shared)",
      additionalInfo: ["Dress code: Formal", "Age restriction: 18+"]
    }
  ];

  // Find the event based on the id
  const event = events.find(event => event.id === parseInt(id));

  if (!event) return <p></p>;

  return (
    <>
    <Header />
    <div className="container mt-4">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8">
          <h1>{event.title}</h1>

          <div className="mb-3">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="mb-3">
            <h3>Description</h3>
            <p>{event.description}</p>
          </div>

          <div className="mb-3">
            <h4>Additional Information</h4>
            <ul>
              {event.additionalInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>

          <div className="mb-3">
            <h4>Tags</h4>
            {event.tags.map((tag, index) => (
              <span key={index} className="badge bg-danger me-2">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Event Details</h5>
              <ul className="list-unstyled">
                <li><strong>Date:</strong> {event.date}</li>
                <li><strong>Venue:</strong> {event.venue}</li>
                <li><strong>Price:</strong> {event.pricing}</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Speakers</h5>
              <ul className="list-unstyled">
                {event.speakers.map((speaker, index) => (
                  <li key={index}>{speaker}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EventDetail;
