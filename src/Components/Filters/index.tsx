import styles from './styles.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
//import Checkbox from'rc-checkbox'
//import 'rc-checkbox/assets/index.css'

export default function Filters() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1><b>Filtros</b></h1>
      </div>

      <div className={styles.sliderBar}>
        <span>maxCP</span>
        <Slider.Range 
          max={1500}
          onChange={()=>{}}
          defaultValue={[0,1500]}
          
          step={2}
          trackStyle={[{backgroundColor:'#04E762',borderRadius: '5px', height: '10px'}]}
          maximumTrackStyle={{backgroundColor:'#DBDBDB',borderRadius: '5px', height: '10px'}}
          handleStyle={[

            {borderColor:'#FFFFFF', height:'18px', width:'18px'},
            {borderColor:'#FFFFFF', height:'18px', width:'18px'}

          ]}

          />
          <div>
            <span>329</span>
            <span>2512</span>
          </div>
      </div>

      <section className={styles.types}>
      <span>Types</span>
          <div className={styles.table}>
            <div className={styles.col1}>
              <span><input type='checkbox'/>Normal</span>
              <span><input type='checkbox'/>Water</span>
              <span><input type='checkbox'/>Poison</span>
              <span><input type='checkbox'/>Psychic</span>
              <span><input type='checkbox'/>Bug</span>
              <span><input type='checkbox'/>Dark</span>
            </div>
            <div className={styles.col2}>
              <span><input type='checkbox'/>Fire</span>
              <span><input type='checkbox'/>Flying</span>
              <span><input type='checkbox'/>Elecspanic</span>
              <span><input type='checkbox'/>Rock</span>
              <span><input type='checkbox'/>Dragon</span>
              <span><input type='checkbox'/>Steel</span>
            </div>
            <div className={styles.col3}>
              <span><input type='checkbox'/>Fighting</span>
              <span><input type='checkbox'/>Grass</span>
              <span><input type='checkbox'/>Ground</span>
              <span><input type='checkbox'/>Ice</span>
              <span><input type='checkbox'/>Ghost</span>
              <span><input type='checkbox'/>Fairy</span>
            </div>
          </div>
      </section>
      
    </div>
  )
}
