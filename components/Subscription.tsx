import styles from '@/styles/DivSpace.module.css'
// import SubscribeButton from './Buttons/SubsButton';

const Subscription = () => {
    return (
        <div className={styles.container}>
          <span className={styles.primarytextsubs}>Get In Touch</span>
          <span className={styles.secondarytextsubs}>Subscribe us for new offerings and travel packages.</span>
          <textarea className={styles.textarea} placeholder='Your email'></textarea>
        </div>
    )
}

export default Subscription;