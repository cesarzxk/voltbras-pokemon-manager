import styles from './styles.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Checkbox from'rc-checkbox'
//import 'rc-checkbox/assets/index.css'

export default function Filters() {

  




  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1><b>Filtro</b></h1>
      </div>

      <div className={styles.sliderBar}>
        <span>maxCP</span>
        <Slider 
          max={1500}
          value={329}
          onChange={()=>{}}
          trackStyle={{backgroundColor:'#DBDBDB',borderRadius: '5px', height: '10px'}} 
          railStyle={{backgroundColor:'#04E762',borderRadius: '5px', height: '10px'}}
          handleStyle={{borderColor:'#FFFFFF', height:'18px', width:'18px'}}

          />
          <div>
            <span>329</span>
            <span>2512</span>
          </div>
      </div>

      <div className={styles.types}>
      <span>Types</span>
        <table>
          <td className={styles.col1}>
            <tr><input type='checkbox'/>Normal</tr>
            <tr><input type='checkbox'/>Water</tr>
            <tr><input type='checkbox'/>Poison</tr>
            <tr><input type='checkbox'/>Psychic</tr>
            <tr><input type='checkbox'/>Bug</tr>
            <tr><input type='checkbox'/>Dark</tr>
          </td>
          <td className={styles.col2}>
            <tr><input type='checkbox'/>Fire</tr>
            <tr><input type='checkbox'/>Flying</tr>
            <tr><input type='checkbox'/>Electric</tr>
            <tr><input type='checkbox'/>Rock</tr>
            <tr><input type='checkbox'/>Dragon</tr>
            <tr><input type='checkbox'/>Steel</tr>
          </td>
          <td className={styles.col3}>
            <tr><input type='checkbox'/>Fighting</tr>
            <tr><input type='checkbox'/>Grass</tr>
            <tr><input type='checkbox'/>Ground</tr>
            <tr><input type='checkbox'/>Ice</tr>
            <tr><input type='checkbox'/>Ghost</tr>
            <tr><input type='checkbox'/>Fairy</tr>
          </td>
        </table>
        
      </div>
      
    </div>
  )
}
