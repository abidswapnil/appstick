import styles from '@/styles/Dashboard/Container.module.css'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Dashboard/Sidebar';
import Card from '@/components/Dashboard/Card';
import CardRectangle from '@/components/Dashboard/CardRectangle';
import Endbar from '@/components/Dashboard/Endbar';


export default function DashboardScreen () {
  return (
    <>
      <main className={styles.container}>
        <Navbar />
        <div className={styles.placement}>
          <Sidebar />
          <div className={styles.content}>
            <div className={styles.card}>
              <a href=""><Card cardNumber='05' cardTitle='Total Accounts' numberColor='orange'/></a>
              <a href=""><Card cardNumber='02' cardTitle='Total Savings Accounts' numberColor='orange'/></a>
              <a href=""><Card cardNumber='03' cardTitle='Total Cards' numberColor='orange' /></a>
              <a href=""><Card cardNumber='07' cardTitle='Total Insurances' numberColor='lightgreen' /></a>
            </div>
            <div className={styles.endbar}><Endbar /></div>
            <div className={styles.rectangle}>
              <CardRectangle content='card1' />
              <CardRectangle content='card2' />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
