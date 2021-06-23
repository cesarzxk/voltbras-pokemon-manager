import dynamic from 'next/dynamic';
import styles  from './home.module.scss';

const PokemonList = dynamic(() => import('../Components/PokemonList'))
const Filters = dynamic(() => import('../Components/Filters'))

export default function Home() {
  return (
    <div className={styles.container}>

        <section className={styles.list}>
            <PokemonList/>
        </section>

        <section className={styles.options}>
          <Filters/>
        </section>
        
    </div>
  )
}
