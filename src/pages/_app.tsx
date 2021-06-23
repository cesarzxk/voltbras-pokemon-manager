import '../styles/global.scss'
import dynamic from 'next/dynamic';
import styles from '../styles/app.module.scss'
import {GlobalProviders} from '../Context/globalContext'
import {PokemonProvider} from '../services/api';

const NavigationBar = dynamic(() => import('../Components/NavigationBar'))


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
