import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card">
      <img
        src={doctor.image}
        alt={`Portrait of ${doctor.name}`}
        width="160"
        height="160"
        loading="lazy"
        decoding="async"
      />
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialty} · {doctor.experience}</p>
        <p>Consultation fee: ₹{doctor.fee}</p>
        <Link className="button secondary" to={`/doctors/${doctor.id}`}>View details</Link>
      </div>
    </article>
  );
}