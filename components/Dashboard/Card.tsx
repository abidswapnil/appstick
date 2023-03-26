import styles from '@/styles/Dashboard/Card.module.css'

const Card = ({cardNumber, cardTitle, numberColor}) => {
  
  const numberStyle = {
    color: numberColor
  };
  return (
    <div className={styles.card}>
      <span style={numberStyle}>{cardNumber}</span>
      <p>{cardTitle}</p>
    </div>
  );
};

export default Card;