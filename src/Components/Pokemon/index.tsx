import styles from './styles.module.scss';
import Image from 'next/image';



export default function Pokemon({data}) {

function color(){
  if(data.maxcp <= 500){
    return '#F87060';
  }else {if(501 <= data.maxcp && data.maxcp <= 1000){
    return '#662C91'
  }else{if(1001 <= data.maxcp && data.maxcp <= 1500){
    return '#F5B700'
  }else{
    return '#00C1FD';
  }
  }
}
}


  return (
    <div className={styles.container}>
      
      <Image
        width={120} 
        height={120} 
        objectFit="contain" 
        src={data.img} 
        alt={data.name}
        />

      <div className={styles.info}>
        <h4><b>{data.name}</b></h4>
        <h6>{data.type.length==1 ? (data.type): (data.type.map(type=>{return type+', '}))}</h6>

        <div style={{backgroundColor:color()}}>{data.maxcp}</div>

      </div>

      <span className={styles.id}>{String(data.id).padStart(3,'0')}</span>
    
    </div>
  )
}
