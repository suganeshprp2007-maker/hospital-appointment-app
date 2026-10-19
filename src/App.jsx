import { lazy, Suspense } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { AppointmentProvider } from "./context/AppointmentContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const DoctorDetailsPage = lazy(() => import("./pages/DoctorDetailsPage"));
const AppointmentsPage = lazy(() => import("./pages/AppointmentsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <AppointmentProvider>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" to="/" aria-label="CarePoint home">✚ CarePoint</Link>
          <nav aria-label="Main navigation">
            <NavLink to="/" end>Doctors</NavLink>
            <NavLink to="/appointments">Appointments</NavLink>
          </nav>
        </div>
      </header>
      <Suspense fallback={<main className="container" role="status" aria-live="polite">Loading page…</main>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors/:doctorId" element={<DoctorDetailsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <footer className="site-footer"><p>© {new Date().getFullYear()} CarePoint Hospital · Educational demo</p></footer>
    </AppointmentProvider>
  );
}