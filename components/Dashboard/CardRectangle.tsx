import styles from '@/styles/Dashboard/Card.module.css'
import Image from 'next/image';
import overview from '../../public/Images/DashboardImages/overview.svg';

const CardRectangle = ({ content }) => {

  return (
    <div className={styles.rectangleCard}>
      {
        content === 'card1' && <div>
          <span>This Year Overview</span>
          <Image src={overview} alt='' />
        </div>
      }
      {
        content === 'card2' && <div>
          <span>Insurence</span>
        </div>
      }
    </div>
  );
};

export default CardRectangle;