import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import NavigationBar from '../Components/NavigationBar';

function MyApp({ Component, pageProps }) {
  return(
  <div className={styles.appWrapper}>
    <NavigationBar/>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
