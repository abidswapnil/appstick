import styles from '@/styles/Button.module.css'
const OvalButton = ({ title }) => {
    return(
        <button className={styles.dealcardbutton}>{title}</button>
    );
}

export default OvalButton;