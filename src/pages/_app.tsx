import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import NavigationBar from '../Components/NavigationBar';
import {GlobalProviders} from '../Context/globalContext'
import {PokemonProvider} from '../services/api';

function MyApp({ Component, pageProps }) {
  return(
    <PokemonProvider>
      <GlobalProviders>
      <div className={styles.appWrapper}>
        <NavigationBar/>
        <Component {...pageProps} />
      </div>
      </GlobalProviders>
  </PokemonProvider>
  )
}

export default MyApp
