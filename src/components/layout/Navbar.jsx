import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Container from "./Container";
import logo from "../../assets/img/logo32.png";
// import LinkButton from "./LinkButton";
import UserProfile from "./UserProfile";

function Navbar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/company", label: "Empresa" },
    { path: "/contact", label: "Contato" },
    { path: "/intranet", label: "Intranet" },
  ];

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Light" />
        </Link>
        <ul className={styles.list}>
          {navLinks.map((link, index) => (
            <li key={index} className={styles.item}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
      <div className={styles.profileContainer}>
        {/* Outros conteúdos da página */}
        <UserProfile userName="" userId="" />
      </div>
    </nav>
  );
}

export default Navbar;
