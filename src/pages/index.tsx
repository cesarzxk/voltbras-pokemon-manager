import dynamic from 'next/dynamic';
import styles  from './home.module.scss';
import {useState} from 'react';
import Sidebar from 'react-sidebar';
import {FaFilter} from 'react-icons/fa'
import { useWindowSize } from '../Hooks/useWindowSize';

const PokemonList = dynamic(() => import('../Components/PokemonList'))
const Filters = dynamic(() => import('../Components/Filters'))


export default function Home() {
  const windowDimensions = useWindowSize();
  const [IsVisible, setIsVisible] = useState(true)



  return (
    <div className={styles.container}>

        <section className={styles.list}>
            <PokemonList/>
        </section>

        <section className={styles.options}>
        
          {
            windowDimensions.width < 1200?
                <Sidebar
                open={IsVisible}
                sidebar={
                <>
                  <button className={styles.filterButton} onClick={()=>setIsVisible(!IsVisible)}>
                    <FaFilter className={styles.filterButtonIcon}/>
                  </button>
                  <Filters/>
                </>
              }>
                <button className={styles.filterButton0} onClick={()=>setIsVisible(!IsVisible)}>
                    <FaFilter className={styles.filterButtonIcon}/>
                  </button>
              </Sidebar>
              :
              <Filters/>
          }
          
         
        </section>
        
    </div>
  )
}
