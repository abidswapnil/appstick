import styles from '@/styles/TripCard.module.css';
import Image from 'next/image';
import norway from '../../public/Images/TripCardImages/norway.svg'

const Norway = ({ title, description }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.cardImage} src={norway} alt={title} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    );
  };

export default Norway;
