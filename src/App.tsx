import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/santanaYure.png',
      name: 'Yure Santana',
      role: 'Desenvolvedor Front-end'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera '},
      {type: "paragraph", content: 'Acabei de subir mais um projeto em meu portfólio. Esse projeto foi feito no Programa Ignite da Rocketseat, confiram no    link disponibilizado.'},
      {type: 'link', content: 'https://github.com/santanaYure'},
    ],
    publishedAt: new Date ('2023-07-18 11:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera '},
      {type: "paragraph", content: 'Acabei de subir mais um projeto em meu portfólio. Esse projeto foi feito no Programa Ignite da Rocketseat, confiram no    link disponibilizado.'},
      {type: 'link', content: 'https://github.com/diego3g'},
    ],
    publishedAt: new Date ('2023-07-17 11:00:00'),
  },
]

export function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
          posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}              
            />
            )
          })
          }
        </main>
      </div>
    </>
  )
}


