// Client-side validation improves usability; the backend must validate again.
export function cleanText(value, maxLength = 120) {
  return String(value ?? "").replace(/[<>]/g, "").trim().slice(0, maxLength);
}

export function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}