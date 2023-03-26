import styles from '@/styles/Dashboard/Sidebar.module.css'
import Image from 'next/image';
import profile from '../../public/Images/DashboardImages/profile.svg'
import { faCreditCard, faSackDollar, faIdCard, faHome, faCarAlt, faPlaneDeparture, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dashboard from '../../public/Images/DashboardImages/dashboard.svg'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-profile']}>
        <div className={styles.SidebarImageWrapper}>
          <div>
            <Image alt='' src={profile} className={styles.SidebarImage} />
          </div>
        </div>  
        <span>Martha Uilson<a href="">uilson@email.com</a></span>
      </div>
      <Image src={dashboard} alt='' />
      <ul className={styles.ul}>
        <span>BANKING</span>
        <li><a href="/"><FontAwesomeIcon icon={faCreditCard} size="xl" />My Accounts</a></li>
        <li><a href="/"><FontAwesomeIcon icon={faSackDollar} size="xl" />My Savings</a></li>
        <li><a href="/"><FontAwesomeIcon icon={faIdCard} size="xl" />My Cards</a></li>
      </ul>
      <ul className={styles.ul}>
        <span>INSURENCE</span>
        <li><a href="/"><FontAwesomeIcon icon={faHome} size="xl" />My Home</a></li>
        <li><a href="/"><FontAwesomeIcon icon={faCarAlt} size="xl" />My Mobility</a></li>
        <li><a href="/"><FontAwesomeIcon icon={faPlaneDeparture} size="xl" />My Taraveling</a></li>
      </ul>
      <ul className={styles.ul}>
        <span>TRAVEL</span>
        <li><a href="/"><FontAwesomeIcon icon={faCalendar} size="xl" />My Bookings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;