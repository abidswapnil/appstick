import styles from '@/styles/AuthStyle.module.css'
import Image from 'next/image';
import tree from '@/public/Images/AuthImages/tree.svg'

const RegistrationScreen = ({ title }) => {
    return(
        <div>
          <div className={styles.registraionImage}>
            <Image alt='' src={tree} />
          </div>
        </div>
    );
}

export default RegistrationScreen;