import styles from './styles.module.scss';
import Pokemon from '../Pokemon';
import Flatlist from "flatlist-react";



export default function PokemonList() {


  const renderPerson = (pokemon) => {
    return <Pokemon key={pokemon.id} data={pokemon}/>;
  }

  const pokemon = [
    {id:1,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:2,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    {id:3,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:4,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    {id:5,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:6,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    {id:6,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:7,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    {id:8,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:9,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    {id:10,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:11,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    {id:8,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:9,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    {id:8,  name: 'Bulbasaur', img:'/bulbasaur.png', type: ['Grass', 'Poison' ], cp:'951'},
    {id:9,  name: 'Pikachu', img:'/pikachu.png', type: ['Eletric'], cp:'1051'},
    
  ]





  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Lista de pokémons</h1>
      <span className={styles.subTitle}>Total viíveis: 158</span>
      <div className={styles.flatcontainer}>
      <Flatlist
        
        display={{
          grid: true,
          minColumnWidth: "240px",
          rowGap:"15px"
          
        }}

        

        list={pokemon}
        renderItem={renderPerson}
        renderWhenEmpty={() => <div>List is empty!</div>}
        sortBy={["firstName", {key: "firstName", descending: true}]}
      />
      </div>

    </div>
  )
}
