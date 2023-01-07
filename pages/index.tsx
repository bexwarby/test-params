import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Child from '../components/child';

const Home: React.FC = () => {
  const [number, setNumber] = useState(0)

  const handleSetNumber = (num: number) => {
    setNumber(num)
  }

  return (
    <>
      <main className={styles.main}>
        <Child setNumber={handleSetNumber}/>
        <p>This is the number: {number}</p>
      </main>
    </>
  )
}

export default Home;