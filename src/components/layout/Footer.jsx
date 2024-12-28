import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.siga_nos}>
        <span> Siga-nos</span>
      </p>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaYoutubeSquare />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span> Pulse </span> &copy; 2024 Todos os direitos reservados
      </p>
    </footer>
  );
}

export default Footer;
