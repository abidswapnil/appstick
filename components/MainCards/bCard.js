import styles from '@/styles/Card/MainCard.module.css';
import { faUserPlus, faCreditCard, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import banking from '../../public/Images/MainCardImages/banking.svg';
import Link from 'next/link';

const Bcard = ({ title }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImage} src={banking} alt='' />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <Link href="">
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faUserPlus} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Add Account</span>
                <span className={styles.cardSubLabel}>Your multiple bank account</span>
              </div>
            </div>
          </Link>
          <Link href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faSackDollar} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Savings</span>
                <span className={styles.cardSubLabel}>Explore saving plan</span>
              </div>
            </div>
          </Link>
          <Link href=''>
            <div className={styles.cardRow}>
              <FontAwesomeIcon icon={faCreditCard} className={styles.cardIcon} />
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>Add Cardds</span>
                <span className={styles.cardSubLabel}>Personalize your cards</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  };

export default Bcard;
