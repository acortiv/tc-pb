import Link from "next/link";

export default function Footer() {
  return (
    <footer className="nav-container flex justify-left items-center gap-2">
        <h1><Link href="https://www.linkedin.com/in/tacortiv/">[LinkedIn]</Link></h1>
        <h1><Link href="https://github.com/acortiv">[GitHub]</Link></h1>
      </footer>
  );
}
