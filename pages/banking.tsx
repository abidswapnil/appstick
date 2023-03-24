import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'



export default function Banking() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>Welcome to Banking page</div>
      </main>
    </>
  )
}
