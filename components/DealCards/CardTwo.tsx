import styles from '@/styles/DealCard.module.css';
import ExploreButton from '../Buttons/DealcardButton';
import Image from 'next/image';
import pictet from '../../public/Images/DealCardImages/pictet.svg';

const CardTwo = ({ title, description }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImagePictet} src={pictet} alt={title} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
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
          <ExploreButton />
        </div>
      </div>
    );
  };

export default CardTwo;
