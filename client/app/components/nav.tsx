import Link from "next/link";

export default function Nav() {
  return (
      <header className="nav-container">
        <h1><Link href="/">[Home]</Link></h1>
        <h1><Link href="/projects">[Projects]</Link></h1>
        <h1><Link href="/resume">[Resume]</Link></h1>
      </header>
  );
}
