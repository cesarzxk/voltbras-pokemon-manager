import styles from './styles.module.scss';
import {HiOutlineViewList} from 'react-icons/hi';
import {AiOutlineTrophy} from 'react-icons/ai';
import {RiDashboardLine} from 'react-icons/ri';
import {BiHelpCircle} from 'react-icons/bi';

import {InlineIcon } from '@iconify/react';
import roundMiscellaneousServices from '@iconify-icons/ic/round-miscellaneous-services';


export default function NavigationBar() {
  return (
    <div className={styles.container}>
      <section>
        <img className={styles.logo} src='/Voltbras logo.png'/>
        <div>
          <strong>Voltbras App</strong>
          <span>Pokémon Menager</span>
        </div>
      </section>

      <ul className={styles.options}>
        <li><HiOutlineViewList className={styles.icon}/><span>Lista</span></li>
        <li><AiOutlineTrophy className={styles.icon}/><span>Conquistas</span></li>
        <li><RiDashboardLine className={styles.icon}></RiDashboardLine><span>Pokédex</span></li>
        <li><BiHelpCircle className={styles.icon}/><span>Ajuda</span></li>
        <li><InlineIcon className={styles.icon} icon={roundMiscellaneousServices}/><span>Configuração</span></li>
      </ul>
      
      <span className={styles.version}>Versão 1.0.0</span>
    </div>
  )
}
//HiOutlineViewList