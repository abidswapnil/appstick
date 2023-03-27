import styles from '@/styles/Card/MainCard.module.css';
import { faCalendar, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import travel from '../../public/Images/MainCardImages/travel.svg';
import Link from 'next/link';

const Tcard = ({ title}) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImage} src={travel} alt='' />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <Link href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faCalendar} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>New Booking</span>
                <span className={styles.cardSubLabel}>Book a new schedule</span>
              </div>
            </div>
          </Link>
          <Link href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faRoute} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Plan & roots</span>
                <span className={styles.cardSubLabel}>Explore all packages</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  };

export default Tcard;
