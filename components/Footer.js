import styles from '@/styles/DivSpace.module.css'
import OvalButton from './Buttons/OvalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import googleplay from '@/public/Images/FooterImages/googleplay.svg'
import Link from 'next/link';

const Footer = () => {
    return (
      <div className={styles.footercontainer}>
        <div className={styles.rightfooter}>
          <span className={styles.rightfooterprimarytext}>Need Help With </span>
          <span className={styles.rightfootersecondarytext}>
            <Link href='' className={styles.link}>Anything?</Link>
          </span>
          <span className={styles.rightfootersubtext}>
            <Link href=''>We are here to support you!</Link>
          </span>
          <div className={styles.contactbutton}>
            <OvalButton title='Contact' />
          </div>
        </div>
        <div>
          <ul className={styles.rightfooterUl}>
            <li>
              <ul className={styles.rightfooternestedUl}>
                <span>Banking</span>
                <Link href=""><li>Add new accounts</li></Link>
                <Link href=""><li>My account</li></Link>
                <Link href=""><li>My savings</li></Link>
                <Link href=""><li>Add new cards</li></Link>
                <Link href=""><li>My cards</li></Link>
              </ul>
            </li>
            <li>
              <ul className={styles.rightfooternestedUl}>
                <span>Insurence</span>
                <Link href=""><li>Home insurence</li></Link>
                <Link href=""><li>Mobility insurence</li></Link>
                <Link href=""><li>Travel Insurence</li></Link>
              </ul>
            </li>
            <li>
              <ul className={styles.rightfooternestedUl}>
                <span>Traveling</span>
                <Link href=""><li>Add new booking</li></Link>
                <Link href=""><li>My books</li></Link>
                <Link href=""><li>Plan & roots</li></Link>
              </ul>
            </li>
            <li>
              <ul className={styles.rightfooternestedUl}>
                <span>More</span>
                <Link href=""><li>About us</li></Link>
                <Link href=""><li>Send email</li></Link>
                <Link href=""><li>Blog</li></Link>
                <Link href=""><li>FAQ</li></Link>
                <Link href=""><li>Service policy</li></Link>
              </ul>
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <Link href=""><Image src={googleplay} alt=''/></Link>
            <Link href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></Link>
            <Link href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></Link>
          </div>
        </div>
      </div>
    )
}

export default Footer;