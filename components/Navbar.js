import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faShieldAlt, faPlane, faUser, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import square from '../public/square.svg';
import leaf from '../public/leaf.svg';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.navLogo}><Image src={leaf} alt='' /><Image src={square} alt='' />myLife</h1>
      <ul className={styles.navLinks}>
        <li>
          <FontAwesomeIcon icon={faBriefcase}  className={styles.link} />
          <Link className={styles.navLink} href="http://localhost:3000">Banking</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faShieldAlt} className={styles.link} />
          <Link className={styles.navLink} href="">Insurance</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faPlane} className={styles.link} />
          <Link className={styles.navLink} href="">Travel</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className={styles.link} />
          <Link className={styles.navLink} href="http://localhost:3000/dashboard" >My Profile</Link>
          <Link href="http://localhost:3000/login"><FontAwesomeIcon icon={faSignOut} className={styles.link} /></Link>
        </li>
      </ul>
      <div><FontAwesomeIcon icon={faSearch} className={styles.link} /></div>
    </nav>
  );
};

export default Navbar;
