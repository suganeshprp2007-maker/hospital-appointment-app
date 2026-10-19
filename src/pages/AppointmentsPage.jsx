import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import { useAppointments } from "../context/AppointmentContext";
import { cleanText, validEmail } from "../utils/validation";

export default function AppointmentsPage() {
  const [searchParams] = useSearchParams();
  const initialDoctor = searchParams.get("doctor") || "";
  const { appointments, bookAppointment, cancelAppointment } = useAppointments();
  const [doctorId, setDoctorId] = useState(initialDoctor);
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const minDate = useMemo(() => new Date().toLocaleDateString("en-CA"), []);
  function handleSubmit(event) {
    event.preventDefault();
    const safeName = cleanText(patientName, 80);
    const safeEmail = cleanText(email, 120);
    if (!safeName || !validEmail(safeEmail) || !doctorId || !date || date < minDate) {
      setMessage("Please enter valid details and choose today or a future date.");
      return;
    }
    const doctor = doctors.find((item) => item.id === doctorId);
    if (!doctor) {
      setMessage("Please select a valid doctor.");
      return;
    }
    bookAppointment({ patientName: safeName, email: safeEmail, date, doctorName: doctor.name, doctorId });
    setPatientName("");
    setEmail("");
    setDate("");
    setMessage("Appointment booked successfully.");
  }

  return (
    <main id="main-content" className="container">
      <h1>Appointments</h1>
      <section className="panel" aria-labelledby="booking-heading">
        <h2 id="booking-heading">Book an appointment</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div>
              <label htmlFor="patient-name">Patient name</label>
              <input id="patient-name" name="patientName" value={patientName}
                onChange={(e) => setPatientName(e.target.value)} autoComplete="name"
                required maxLength={80} aria-describedby="name-help" />
              <small id="name-help">Use 1–80 characters.</small>
            </div>
            <div>
              <label htmlFor="patient-email">Email address</label>
              <input id="patient-email" name="email" type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} autoComplete="email"
                required maxLength={120} />
            </div>
            <div>
              <label htmlFor="doctor-select">Doctor</label>
              <select id="doctor-select" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required>
                <option value="">Select a doctor</option>
                {doctors.map((doctor) => <option key={doctor.id} value={doctor.id}>{doctor.name} — {doctor.specialty}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="appointment-date">Appointment date</label>
              <input id="appointment-date" type="date" value={date} min={minDate}
                onChange={(e) => setDate(e.target.value)} required />
            </div>
          </div>
          <button className="button" type="submit">Book appointment</button>
          {message && <p role="status" aria-live="polite">{message}</p>}
        </form>
      </section>

      <section className="panel" aria-labelledby="history-heading">
        <h2 id="history-heading">Appointment history</h2>
        {appointments.length === 0 ? <p>No appointments booked yet.</p> : (
          <ul className="appointment-list">
            {appointments.map((appointment) => (
              <li key={appointment.id} className="appointment-item">
                <div>
                  <strong>{appointment.doctorName}</strong>
                  <p>{appointment.patientName} · {appointment.date}</p>
                  <p>Status: <span className={appointment.status === "Booked" ? "status-booked" : "status-cancelled"}>{appointment.status}</span></p>
                </div>
                {appointment.status === "Booked" && (
                  <button className="button danger" type="button"
                    aria-label={`Cancel appointment with ${appointment.doctorName} on ${appointment.date}`}
                    onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
      <p className="security-note">Demo only: this sample does not send or store medical records on a server.</p>
    </main>
  );
}