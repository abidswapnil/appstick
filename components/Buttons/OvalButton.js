import styles from '@/styles/Button.module.css'

const OvalButton = ({ title }) => {
    return(
        <button className={styles.ovalbutton}>{title}</button>
    );
}

export default OvalButton;