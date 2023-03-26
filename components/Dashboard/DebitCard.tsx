import styles from '@/styles/Dashboard/Card.module.css'

const DebitCard = ({ content }) => {
  let topStyle = '';
  let bottomStyle = '';
  let name = '';
  let cardNumber = '';
  let balance = '';
  switch (content) {
    case 'card1':
      topStyle = styles.debitCard1Top;
      bottomStyle = styles.debitCard1Bottom;
      name = 'John';
      cardNumber = 'AC: 90876545123';
      balance = '23,45,000';
      break;
    case 'card2':
      topStyle = styles.debitCard2Top;
      bottomStyle = styles.debitCard2Bottom;
      name = 'Maratha';
      cardNumber = 'AC: 52375545123';
      balance = '13,45,000';
      break;
    case 'card3':
      topStyle = styles.debitCard3Top;
      bottomStyle = styles.debitCard3Bottom;
      name = 'Leo';
      cardNumber = 'AC: 10823515123';
      balance = '56,45,000';
      break;
  }
  return (
    <div className={styles.debitcard}>
      <div className={topStyle}>
        <span>{name}</span>
        <p>{cardNumber}</p>
      </div>
      <div className={bottomStyle}>
        <span>{balance} BDT.</span>
        <p>Total balance</p>
      </div>
    </div>
  );
};

export default DebitCard;