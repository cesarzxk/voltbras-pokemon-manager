import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import NavigationBar from '../Components/NavigationBar';
import {ApolloRequest} from '../services/api';

function MyApp({ Component, pageProps }) {
  return(
    <ApolloRequest>
      <div className={styles.appWrapper}>
        <NavigationBar/>
        <Component {...pageProps} />
      </div>
  </ApolloRequest>
  )
}

export default MyApp
