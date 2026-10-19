import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDoctors } from "../api/doctors";
import DoctorCard from "../components/DoctorCard";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    getDoctors({ signal: controller.signal })
      .then(setDoctors)
      .catch((err) => {
        if (err.name !== "AbortError") setError("Could not load doctors. Please try again.");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const specialties = ["All", ...new Set(doctors.map((doctor) => doctor.specialty))];
  const filtered = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialty}`.toLowerCase().includes(query.toLowerCase()) &&
    (specialty === "All" || doctor.specialty === specialty)
  );

  return (
    <main id="main-content" className="container">
      <section className="hero">
        <p className="eyebrow">CAREPOINT HOSPITAL</p>
        <h1>Healthcare appointments, made simpler.</h1>
        <p>Explore doctors and choose an appointment time that works for you.</p>
        <Link className="button" to="/appointments">View appointments</Link>
      </section>

      <section aria-labelledby="doctors-heading">
        <div className="section-heading">
          <div><h2 id="doctors-heading">Our doctors</h2><p>Choose a specialist to view details.</p></div>
          <div className="filters">
            <label htmlFor="doctor-search">Search doctors</label>
            <input id="doctor-search" type="search" value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name or specialty" maxLength={80} />
            <label htmlFor="specialty-filter">Specialty</label>
            <select id="specialty-filter" value={specialty}
              onChange={(event) => setSpecialty(event.target.value)}>
              {specialties.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>
        {loading && <p role="status" aria-live="polite">Loading doctors…</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && filtered.length === 0 && <p>No doctors match your search.</p>}
        <div className="doctor-grid">
          {filtered.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
        </div>
      </section>
    </main>
  );
}