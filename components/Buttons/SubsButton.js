import styles from '@/styles/Button.module.css'
const SubscribeButton = () => {
    const handleSubscribe = () => {
        console.log('pressed');
    }

    return(
        <button onClick={handleSubscribe} className={styles.subscribebutton}>Subscribe</button>
    );
    
}

export default SubscribeButton;