import { doctors } from "../data/doctors";

// Replace this demo function with a real API endpoint when a backend is available.
// AbortSignal lets the caller cancel a request when a page unmounts.
export async function getDoctors({ signal } = {}) {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, 250);
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Request aborted", "AbortError"));
    }, { once: true });
  });
  if (signal?.aborted) throw new DOMException("Request aborted", "AbortError");
  return doctors;
}