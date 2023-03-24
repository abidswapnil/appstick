import styles from '@/styles/DivSpace.module.css'
import OvalButton from './Buttons/OvalButton';

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
          <ul className={styles.ul}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    )
}

export default Footer;