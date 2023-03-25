import styles from '@/styles/DivSpace.module.css'
import SubscribeButton from './Buttons/SubsButton';

const Subscription = () => {
    return (
        <div className={styles.container}>
          <span className={styles.primarytextsubs}>Get In Touch</span>
          <span className={styles.secondarytextsubs}>Subscribe us for new offerings and travel packages.</span>
          <div className={styles.subscriptioncontainer}>
            <textarea className={styles.textarea} placeholder='Your email'></textarea>
            <SubscribeButton />
          </div>
        </div>
    )
}

export default Subscription;