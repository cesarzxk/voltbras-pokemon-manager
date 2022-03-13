import styles from './styles.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useGlobal } from '../../Context/globalContext';
import { useState } from 'react';


export default function Filters() {
  const {filters, setKey1, setKey2, setfilters} = useGlobal()
  const [viewkey1, setViewKey1] = useState<number>(0)
  const [viewkey2, setViewKey2] = useState<number>(4000)
  

  function handleSeek(val1:number, val2:number){
    setKey1(val1);
    setKey2(val2);
    
  }

  function viewSeek(val1:number, val2:number) {
    setViewKey1(val1)
    setViewKey2(val2)
    
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

          max={4000}
          onChange={([val1,val2])=> viewSeek(val1,val2)}
          onAfterChange={([val1,val2])=>{handleSeek(val1,val2)}}
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
            <span>{viewkey1}</span>
            <span>{viewkey2}</span>
          </div>
      </div>

      <section className={styles.types}>
      
        <span>Types</span>

          <div className={styles.table}>
            <div className={styles.col1}>

              <span><input id='1' 
              onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
              value="0 Normal" 
              type='checkbox'/>
                <label htmlFor="1">Normal</label>
            </span>
              
              <span>
                <input id='2' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="1 Water" type='checkbox'/>
                  <label htmlFor="2">Water</label>
              </span>
              
              <span>
                <input id='3' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="2 Poison" type='checkbox'/>
                  <label htmlFor="3">Poison</label>
              </span>
              
              <span>
                <input id='4' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="3 Psychic" type='checkbox'/>
                  <label htmlFor="4">Psychic</label>
              </span>
              
              <span>
                <input id='5' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="4 Bug" 
                type='checkbox'/>
                  <label htmlFor="5">Bug</label>
                </span>
              
              <span>
                <input id='6' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="5 Dark" 
                type='checkbox'/>
                  <label htmlFor="6">Dark</label>
              </span>

            </div>

            <div className={styles.col2}>

              <span>
                <input id='7' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="6 Fire" 
                type='checkbox'/>
                  <label htmlFor="7">Fire</label>
              </span>
              
              <span>
                <input id='8' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="7 Flying" 
                type='checkbox'/>
                  <label htmlFor="8">Flying</label>
              </span>
              
              <span>
                <input id='9' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="8 Electric" 
                type='checkbox'/>
                  <label htmlFor="9">Electric</label>
              </span>
              
              <span>
                <input id='10' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="9 Rock" 
                type='checkbox'/>
                  <label htmlFor="10">Rock</label>
              </span>
              
              <span>
                <input id='11' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="10 Dragon" 
                type='checkbox'/>
                  <label htmlFor="11">Dragon</label>
              </span>
              
              <span>
                <input id='12' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="11 Steel" 
                type='checkbox'/>
                  <label htmlFor="12">Steel</label>
              </span>

            </div>

            <div className={styles.col3}>

              <span>
                <input id='13' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="12 Fighting" 
                type='checkbox'/>
                  <label htmlFor="13">Fighting</label>
              </span>

              <span>
                <input id='14' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="13 Grass" 
                type='checkbox'/>
                  <label htmlFor="14">Grass</label>
              </span>
              
              <span>
                <input id='15' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="14 Ground" 
                type='checkbox'/>
                  <label htmlFor="15">Ground</label>
              </span>
              
              <span>
                <input id='16' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="15 Ice" type='checkbox'/>
                  <label htmlFor="16">Ice</label>
              </span>
              
              <span>
                <input id='17' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="16 Ghost" 
                type='checkbox'/>
                  <label htmlFor="17">Ghost</label>
              </span>
              
              <span>
                <input id='18' 
                onChange={({currentTarget})=>{changeFilters(currentTarget.value)}} 
                value="17 Fairy" 
                type='checkbox'/>
                  <label htmlFor="18">Fairy</label>
              </span>

            </div>
          </div>
      </section>
      </div>
      
  )
}
