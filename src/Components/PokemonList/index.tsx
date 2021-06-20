import styles from './styles.module.scss';
import Pokemon from '../Pokemon';
import Flatlist from "flatlist-react";
import{gql}from "@apollo/client";
import { client } from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';

type pokemon ={
  id:number;
  name:string;
  maxcp:number;
  img:string;
  type:string[];

}

type data=(pokemon[]);
  


export default function PokemonList() {


  const [data, setData]= useState<data>([]);

  useEffect(()=>{
    getPokemons()
  }, []);



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
      <span className={styles.subTitle}>Total viíveis: 158</span>
      <div className={styles.flatcontainer}>
      <Flatlist
        
        display={{
          grid: true,
          minColumnWidth: "240px",
          rowGap:"15px"
      
          
        }}

        list={data}
        renderItem={renderPokemon}
        renderWhenEmpty={() => <div>List is empty!</div>}
        sortBy={["name", {key: "name", descending: true}]}
      />
      </div>

    </div>
  )
}
