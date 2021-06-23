import styles from './styles.module.scss';
import Flatlist from "flatlist-react";
import dynamic from 'next/dynamic';

import { useEffect } from 'react';
import { useState } from 'react';
import { useGlobal } from '../../Context/globalContext';

const Pokemon = dynamic(() => import('../Pokemon'))



export default function PokemonList() {
  const {filters, key1, key2, data} = useGlobal()
  
  const [isntNullFilter, setIsntNullFilter] = useState<boolean>(true); 
  const [lcount, setlCount] = useState<number>(0);

  useEffect(()=>{
    setIsntNullFilter(filters.every((val)=>{return val==''}));
    countFiltred()
  },[filters, key2, key1])

  
function countFiltred(){
  let array = []
  for(let i=0; i<data.length; i++){

    if(filtering(data[i].type, data[i].maxcp)){
      array.push(data[i].name)}  
  }

  setlCount(array.length);
}
  
  
function filtering(type:String[], maxCP:number){

    if (maxCP <= key2 && maxCP >= key1){
      
      if(filters.every((val)=>{return val==''})){
        return true
        
      }else{

        for(let x=0; x< type.length; x++){

          for(let i=0; i< filters.length; i++){

            if(type[x] == filters[i]){
              return true;
            }
          }
        }
      }
    }
    return false;
}


  const renderPokemon = (pokemon) => {
    return <Pokemon key={pokemon.id} data={pokemon}/>;
  }

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Lista de pokémons</h1>

      <span className={styles.subTitle}>Total visíveis: {isntNullFilter? (data.length):(lcount)}</span>

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
          filterBy={pokemon => filtering(pokemon.type, pokemon.maxcp)}
        />
        
        </div>
      </section>
    </div>
  )
}
