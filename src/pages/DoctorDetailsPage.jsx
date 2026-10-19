import { Link, useParams } from "react-router-dom";
import { doctors } from "../data/doctors";

export default function DoctorDetailsPage() {
  const { doctorId } = useParams();
  const doctor = doctors.find((item) => item.id === doctorId);

  if (!doctor) return <main id="main-content" className="container"><h1>Doctor not found</h1><Link to="/">Back to doctors</Link></main>;

  return (
    <main id="main-content" className="container narrow">
      <Link to="/" className="back-link">← All doctors</Link>
      <article className="detail-card">
        <img src={doctor.image} alt={`Portrait of ${doctor.name}`} width="200" height="200" decoding="async" />
        <div>
          <p className="eyebrow">{doctor.specialty}</p>
          <h1>{doctor.name}</h1>
          <p>{doctor.description}</p>
          <p>Experience: {doctor.experience}</p>
          <p>Consultation fee: ₹{doctor.fee}</p>
          <Link className="button" to={`/appointments?doctor=${doctor.id}`}>Book appointment</Link>
        </div>
      </article>
    </main>
  );
}