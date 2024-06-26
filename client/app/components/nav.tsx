import Link from "next/link";

export default function Nav() {
  return (
      <header className="nav-container mt-3 mb-3 ml-1">
        <h1><Link href="/">[Home]</Link></h1>
        <h1><Link href="/projects">[Projects]</Link></h1>
        <h1><Link href="/resume">[Resume]</Link></h1>
      </header>
  );
}
