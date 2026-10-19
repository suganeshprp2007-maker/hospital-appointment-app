import { createContext, useContext, useMemo, useState } from "react";

const AppointmentContext = createContext(null);

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);

  function bookAppointment(details) {
    setAppointments((current) => [
      ...current,
      { ...details, id: crypto.randomUUID(), status: "Booked" }
    ]);
  }

  function cancelAppointment(id) {
    setAppointments((current) =>
      current.map((item) => item.id === id ? { ...item, status: "Cancelled" } : item)
    );
  }

  const value = useMemo(
    () => ({ appointments, bookAppointment, cancelAppointment }),
    [appointments]
  );

  return <AppointmentContext.Provider value={value}>{children}</AppointmentContext.Provider>;
}

export function useAppointments() {
  const context = useContext(AppointmentContext);
  if (!context) throw new Error("useAppointments must be used inside AppointmentProvider");
  return context;
}