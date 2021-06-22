
import PokemonList from '../Components/PokemonList';
import Filters from '../Components/Filters';
import styles  from './home.module.scss';



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
