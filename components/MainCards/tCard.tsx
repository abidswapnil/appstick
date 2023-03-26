import styles from '@/styles/Card/MainCard.module.css';
import { faCalendar, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import travel from '../../public/Images/MainCardImages/travel.svg';

const Tcard = ({ title, description }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImage} src={travel} alt={title} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
          <a href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faCalendar} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>New Booking</span>
                <span className={styles.cardSubLabel}>Book a new schedule</span>
              </div>
            </div>
          </a>
          <a href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faRoute} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Plan & roots</span>
                <span className={styles.cardSubLabel}>Explore all packages</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };

export default Tcard;
