import styles from './styles.module.scss';
import Pokemon from '../Pokemon';
import Flatlist from "flatlist-react";
import {gql}from "@apollo/client";
import { client } from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useGlobal } from '../../Context/globalContext';

type pokemon ={
  id:number;
  name:string;
  maxcp:number;
  img:string;
  type:string[];

}


export default function PokemonList() {
  const {filters, chave1, chave2}=useGlobal()
  const [isntNullFilter, setIsntNullFilter] = useState<boolean>(true);
  const [data, setData]  = useState<pokemon[]>([]);
  
  let [lcount, setlCount] = useState<number>(0);

  useEffect(()=>{
    getPokemons()
  }, []);

  useEffect(()=>{
    setIsntNullFilter(filters.every((val)=>{return val==''}));
    countFiltred()
  },[filters])

  
function countFiltred(){
  let array = new Set()
  for(let i=0; i<data.length; i++){
    if(filtering(data[i].type, data[i].maxcp)){
      array.add(data[i].name)}  
  }
  setlCount(array.size);
}
  
  
function filtering(type:String[], maxCP:number){
  if (maxCP <= chave2 && maxCP >= chave1){
    for(let x=0; x< type.length; x++){
      for(let i=0; i< filters.length; i++){
        if(type[x] == filters[i]){
          return true;
        }
      }
    }
  }
  return false;
}


  async function getPokemons() {
    await client.query({
      query:gql`
      {
        pokemons(first:151) {
          number
          name
          maxCP
          image
          attacks{
            special{
              type
            }
          }
        }
      }`

    }).then(result => {
      const data = result.data.pokemons.map(response=>{
        const types = response.attacks.special.map(attack=>{
          return attack.type}
        )
        let newTypes = new Set();

        for(let i=0; i<types.length;i++){
          newTypes.add(types[i])

        };

        return{
          id: response.number,  
          name: response.name, 
          img: response.image, 
          type:[...newTypes.values()],
          maxcp: response.maxCP
        }
      })

      setData(data)

     }
    )
  }


  const renderPokemon = (pokemon) => {
    return <Pokemon key={pokemon.id} data={pokemon}/>;
  }

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Lista de pokémons</h1>
      <span className={styles.subTitle}>Total visíveis: {lcount}</span>

      <section className={styles.flatcontainer}>
        <div>
        <Flatlist
        
          display={{
            grid: true,
            minColumnWidth: "240px",
            rowGap:"15px"
          }}


          
          list={data}
          renderItem={renderPokemon}

          renderWhenEmpty={() => <img style={{alignSelf:'center'}} height={200} width={400} src='./Nada.jpg'/>}
          
          sortBy={[{key: "id", descending: false}]}
          

          filterBy={pokemon => filtering(pokemon.type, pokemon.maxcp)||isntNullFilter}
        />
        </div>
      </section>
    </div>
  )
}
