import styles from '@/styles/DivSpace.module.css'
import OvalButton from './Buttons/OvalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import googleplay from '@/public/Images/FooterImages/googleplay.svg'

const Footer = () => {
    return (
      <div className={styles.footercontainer}>
        <div className={styles.rightfooter}>
          <span className={styles.rightfooterprimarytext}>Need Help With </span>
          <span className={styles.rightfootersecondarytext}>
            <a href='' className={styles.link}>Anything?</a>
          </span>
          <span className={styles.rightfootersubtext}>
            <a href=''>We are here to support you!</a>
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
                <a href=""><li>Add new accounts</li></a>
                <a href=""><li>My account</li></a>
                <a href=""><li>My savings</li></a>
                <a href=""><li>Add new cards</li></a>
                <a href=""><li>My cards</li></a>
              </ul>
            </li>
            <li>
              <ul className={styles.rightfooternestedUl}>
                <span>Insurence</span>
                <a href=""><li>Home insurence</li></a>
                <a href=""><li>Mobility insurence</li></a>
                <a href=""><li>Travel Insurence</li></a>
              </ul>
            </li>
            <li>
              <ul className={styles.rightfooternestedUl}>
                <span>Traveling</span>
                <a href=""><li>Add new booking</li></a>
                <a href=""><li>My books</li></a>
                <a href=""><li>Plan & roots</li></a>
              </ul>
            </li>
            <li>
              <ul className={styles.rightfooternestedUl}>
                <span>More</span>
                <a href=""><li>About us</li></a>
                <a href=""><li>Send email</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>FAQ</li></a>
                <a href=""><li>Service policy</li></a>
              </ul>
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <a href=""><Image src={googleplay} /></a>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    )
}

export default Footer;