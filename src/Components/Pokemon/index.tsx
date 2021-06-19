import styles from './styles.module.scss';



export default function Pokemon({data}) {
  return (
    <div className={styles.container}>
      
      <img src={data.img} alt="" />

      <div className={styles.info}>
        <h4><b>{data.name}</b></h4>
        <h6>{data.type}</h6>
        <div>{data.cp}</div>
      </div>

      <span className={styles.id}>{String(data.id).padStart(3,'0')}</span>
    
    </div>
  )
}
