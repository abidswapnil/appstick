import styles from '@/styles/Card/DealCard.module.css';
import OvalButton from '../Buttons/OvalButton';
import Image from 'next/image';
import ubs from '../../public/Images/DealCardImages/ubs.svg';

const CardOne = () => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImageUbs} src={ubs} alt='' />
        <div className={styles.cardContent}>
          <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Instalment amount:</span>
              <span className={styles.cardValue}>50 - 250 F</span>
          </div>
          <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Duration period::</span>
              <span className={styles.cardValue}>1 - 10 years</span>
          </div>
          <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Interest rate:</span>
              <span className={styles.cardValue}>3.5 - 10 %</span>
          </div>
          <OvalButton title='Explore' />
        </div>
      </div>
    );
  };

export default CardOne;
