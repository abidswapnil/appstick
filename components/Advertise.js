import styles from '@/styles/DivSpace.module.css'
import Image from 'next/image';
import efg from '@/public/Images/AdvertiseImages/efg.svg'
import mirabaud from '@/public/Images/AdvertiseImages/mirabaud.svg'
import ubs from '@/public/Images/AdvertiseImages/ubs.svg'
import pictet from '@/public/Images/AdvertiseImages/pictet.svg'
import postfinance from '@/public/Images/AdvertiseImages/postfinance.svg'
import Link from 'next/link';


const Advertise = () => {
    return (
        <div className={styles.container}>
          <span className={styles.primarytextadvert}>Our Remunerative <Link href="" className={styles.secondarytextadvert}>Banks</Link></span>
          <ul className={styles.imageContaineradvert}>
            <Link href=""><li className={styles.imagesizeadvert}><Image src={efg} alt='' /></li></Link>
            <Link href=""><li className={styles.imagesizeadvert}><Image src={mirabaud} alt='' /></li></Link>
            <Link href=""><li className={styles.imagesizeadvert}><Image src={ubs} alt='' /></li></Link>
            <Link href=""><li className={styles.imagesizeadvert}><Image src={pictet} alt='' /></li></Link>
            <Link href=""><li className={styles.imagesizeadvert}><Image src={postfinance} alt='' /></li></Link>
          </ul>
        </div>
    )
}

export default Advertise;