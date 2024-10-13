interface Appointment {
  id: number;
  client_name: string;
  phone: string;
  service: string;
  date: string;
}

let appointments: Appointment[] = [];

// Load appointments from localStorage on initialization
const storedAppointments = localStorage.getItem('appointments');
if (storedAppointments) {
  appointments = JSON.parse(storedAppointments);
}

export function addAppointment(appointment: Omit<Appointment, 'id'>): void {
  const newAppointment = {
    ...appointment,
    id: Date.now() // Use timestamp as a simple unique id
  };
  appointments.push(newAppointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

export function getAppointments(): Appointment[] {
  return appointments;
}