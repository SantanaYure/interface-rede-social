import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar () {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

        <div className={styles.profile}>
          <Avatar src="https://avatars.githubusercontent.com/u/44871612?v=4"/>

          <strong>Yure Santana</strong>
          <span>Front-end Developer</span>
        </div>

        <footer>
          <a href="http://">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}