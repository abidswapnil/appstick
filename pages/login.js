import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import styles from '@/styles/Auth/Login.module.css'
import Image from 'next/image';
import tree from '@/public/Images/AuthImages/tree.svg'
import Link from 'next/link';

const LoginScreen = () => {
    return(
          <div>
            <div className={styles.mainContainer}>
              <Image alt='' src={tree} />
              <div className={styles.loginContainer}>
                <span>Log In</span>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email:</label>
                  <input type='text' placeholder='Your email' className={styles.input}></input>
                  <label htmlFor="password" className={styles.label}>Password</label>
                  <input type='password' placeholder='Your password' className={styles.input}></input>
                  <Link href="" className={styles.forgotPasswordLink}>Forgot password?</Link>
                  <button className={styles.loginbutton}>Log In</button>
                  <p>Don't have account? <Link href="http://localhost:3000/registration" className={styles.createAccountLink}>Create a account</Link></p>
                  <div className={styles.signupButtonGroup}>
                    <button className={styles.signUpwithFacebook}>
                      <FontAwesomeIcon icon={faFacebook} size="lg" />Sign up with facebook
                    </button>
                    <button className={styles.signUpwithGoogle}>
                      <FontAwesomeIcon icon={faGoogle} size="lg" />Sign up with google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default LoginScreen;