import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faShieldAlt, faPlane, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.navLogo}>myLife</h1>
      <ul className={styles.navLinks}>
        <li>
          <FontAwesomeIcon icon={faBriefcase}  className={styles.link} />
          <a className={styles.navLink} href="http://localhost:3000">Banking</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faShieldAlt} className={styles.link} />
          <a className={styles.navLink} href="">Insurance</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPlane} className={styles.link} />
          <a className={styles.navLink} href="">Travel</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className={styles.link} />
          <a className={styles.navLink} href="http://localhost:3000/dashboard" >My Profile</a>
        </li>
      </ul>
      <div><FontAwesomeIcon icon={faSearch} className={styles.link} /></div>
    </nav>
  );
};

export default Navbar;
