import styles from '@/styles/TripCard.module.css';
import Image from 'next/image';
import germany from '../../public/Images/TripCardImages/germany.svg'

const Germany = ({ title, description }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImage} src={germany} alt={title} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    );
  };

export default Germany;
