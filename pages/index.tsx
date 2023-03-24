import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Bcard from '@/components/MainCards/bCard'
import Icard from '@/components/MainCards/iCard'
import Tcard from '@/components/MainCards/tCard'
import CardOne from '@/components/DealCards/CardOne'
import CardTwo from '@/components/DealCards/CardTwo'
import CardThree from '@/components/DealCards/CardThree'
import Subscription from '@/components/Subscription'
import Germany from '@/components/TripCards/Germany'
import Norway from '@/components/TripCards/Norway'
import Us from '@/components/TripCards/Us'
import Advertise from '@/components/Advertise'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <>
      <main className={styles.background}>
        <Navbar />
        <div className={styles.cardBox}>
          <Bcard title='BANKING' />
          <Icard title='INSURENCE' />
          <Tcard title='TRAVEL' />
        </div>
        <div className={styles.cardBox}>
          <h2 className={styles.h2}>Our Savings Deal</h2>
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
        <div className={styles.subscription}>
          <Subscription />
        </div>
        <div className={styles.cardBox}>
          <h2 className={styles.h2}>Inspiration for your next trip</h2>
          <Germany title='Germany' description='15 days' />
          <Norway title='Norway' description='1 months' />
          <Us title='United States' description='10 days' />
        </div>
        <div className={styles.advertise}>
          <Advertise />
        </div>
        <Footer />
      </main>
    </>
  )
}
