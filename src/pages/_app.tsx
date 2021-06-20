import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import NavigationBar from '../Components/NavigationBar';
import {GlobalProviders} from '../Context/globalContext'
import {ApolloRequest} from '../services/api';

function MyApp({ Component, pageProps }) {
  return(
    <ApolloRequest>
      <GlobalProviders>
      <div className={styles.appWrapper}>
        <NavigationBar/>
        <Component {...pageProps} />
      </div>
      </GlobalProviders>
  </ApolloRequest>
  )
}

export default MyApp
