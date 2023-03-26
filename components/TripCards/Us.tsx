import styles from '@/styles/Card/TripCard.module.css';
import Image from 'next/image';
import us from '../../public/Images/TripCardImages/us.svg'

const Us = ({ title, description }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImage} src={us} alt={title} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    );
  };

export default Us;
