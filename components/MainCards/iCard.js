import styles from '@/styles/Card/MainCard.module.css';
import { faHome, faCarSide, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import insurence from '../../public/Images/MainCardImages/insurence.svg';


const Icard = ({ title }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImage} src={insurence} alt='' />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <a href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faHome} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Home</span>
                <span className={styles.cardSubLabel}>1year - 25years</span>
              </div>
            </div>
          </a>
          <a href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faCarSide} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Mobility</span>
                <span className={styles.cardSubLabel}>3months - 10 years</span>
              </div>
            </div>
          </a>
          <a href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faPlaneDeparture} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Traveling</span>
                <span className={styles.cardSubLabel}>Day long - 6 months</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };

export default Icard;
