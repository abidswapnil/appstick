import styles from '@/styles/Dashboard/Endbar.module.css'
import DebitCard from './DebitCard';

const Endbar = () => {
  return (
    <div className={styles.endbar}>
      <p className={styles['card-label']}>My Cards</p>
      <DebitCard content='card1' />
      <DebitCard content='card2' />
      <DebitCard content='card3' />
    </div>
  );
};

export default Endbar;