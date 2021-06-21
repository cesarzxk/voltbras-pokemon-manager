import styles from './styles.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useGlobal } from '../../Context/globalContext';

//import Checkbox from'rc-checkbox'
//import 'rc-checkbox/assets/index.css'

export default function Filters() {
  const {chave1, chave2, filters, setChave1, setChave2, setfilters} = useGlobal()
  

  function handleSeek(val1:number, val2:number){

    setChave1(val1);
    setChave2(val2);

  }

  function changeFilters(value:string){
    const [id, content] = value.split(' ');
    

    let newFilter = filters.slice()

    if (filters[id] == content){
      newFilter[id] = '';
      setfilters(newFilter)
      
    }else{
      newFilter[id] = content;
      setfilters(newFilter)

    }

  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1><b>Filtros</b></h1>
      </div>

      <div className={styles.sliderBar}>
        <span>maxCP</span>
        <Slider.Range 
          max={3500}
          onChange={([val1,val2])=>{handleSeek(val1,val2)}}
          defaultValue={[0,4000]}
          step={2}
          trackStyle={[{backgroundColor:'#04E762',borderRadius: '5px', height: '10px'}]}
          maximumTrackStyle={{backgroundColor:'#DBDBDB',borderRadius: '5px', height: '10px'}}
          handleStyle={[

            {borderColor:'#FFFFFF', height:'18px', width:'18px'},
            {borderColor:'#FFFFFF', height:'18px', width:'18px'}

          ]}

          />
          <div>
            <span>{chave1}</span>
            <span>{chave2}</span>
          </div>
      </div>

      <section className={styles.types}>
      <span>Types</span>
          <div className={styles.table}>
            <div className={styles.col1}>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="0 Normal" type='checkbox'/>Normal</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="1 Water" type='checkbox'/>Water</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="2 Poison" type='checkbox'/>Poison</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="3 Psychic" type='checkbox'/>Psychic</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="4 Bug" type='checkbox'/>Bug</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="5 Dark" type='checkbox'/>Dark</span>
            </div>
            <div className={styles.col2}>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="6 Fire" type='checkbox'/>Fire</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="7 Flying" type='checkbox'/>Flying</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="8 Electric" type='checkbox'/>Electric</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="9 Rock" type='checkbox'/>Rock</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="10 Dragon" type='checkbox'/>Dragon</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="11 Steel" type='checkbox'/>Steel</span>
            </div>
            <div className={styles.col3}>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="12 Fighting" type='checkbox'/>Fighting</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="13 Grass" type='checkbox'/>Grass</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="14 Ground" type='checkbox'/>Ground</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="15 Ice" type='checkbox'/>Ice</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="16 Ghost" type='checkbox'/>Ghost</span>
              <span><input onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} value="17 Fairy" type='checkbox'/>Fairy</span>
            </div>
          </div>
      </section>
      
    </div>
  )
}
