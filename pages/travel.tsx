import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'



export default function Travel() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>Welcome to Travel page</div>
      </main>
    </>
  )
}
