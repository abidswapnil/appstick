import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import styles from '@/styles/Auth/Login.module.css'
import Image from 'next/image';
import tree from '@/public/Images/AuthImages/tree.svg'

const LoginScreen = () => {
    return(
          <div>
            <div className={styles.mainContainer}>
              <Image alt='' src={tree} />
              <div className={styles.loginContainer}>
                <span>Log In</span>
                <div className={styles.formGroup}>
                  <p>Email</p>
                  <input type='text' placeholder='Your email' className={styles.input}></input>
                  <p>Password</p>
                  <input type='password' placeholder='Your password' className={styles.input}></input>
                  <a href="" className={styles.forgotPasswordLink}>Forgot password?</a>
                  <button className={styles.loginbutton}>Log In</button>
                  <p>Don't have account? <a href="http://localhost:3000/registration" className={styles.createAccountLink}>Create a account</a></p>
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