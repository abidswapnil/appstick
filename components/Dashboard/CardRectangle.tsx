import styles from '@/styles/Dashboard/Card.module.css'

const CardRectangle = ({ content }) => {

  return (
    <div className={styles.rectangleCard}>
      {
        content === 'card1' && <div>
          <span>Overview content</span>
        </div>
      }
      {
        content === 'card2' && <div>
          <span>Insurence content</span>
        </div>
      }
    </div>
  );
};

export default CardRectangle;