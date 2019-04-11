import Link from "next/Link";

const Nav = () => (
  <div>
    <nav className="container">
      <ul>
        <li >
          <Link href="/test-nextjs/">
          {/* <Link href="/"> */}
          <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/test-nextjs/form">
          {/* <Link href="/form"> */}
          <a>FORMULARIO</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
