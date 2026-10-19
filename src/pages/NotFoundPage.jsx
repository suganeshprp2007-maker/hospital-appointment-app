import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return <main id="main-content" className="container"><h1>Page not found</h1><p>The page you requested does not exist.</p><Link to="/">Return home</Link></main>;
}