import './App.css'
import People from './assets/components/People'
import { useState } from 'react';


function App() {
  const people = [
    {
      id: "1",
      nome: "Maria",
      foto: '/img/img1.jpg',
      job: "Artista"
    },
    {
      id: "2",
      nome: "Cássia",
      foto: '/img/img2.jpg',
      job: "Advogada"
    },
    {
      id: "3",
      nome: "Daniele",
      foto: '/img/img3.jpg',
      job: "Terapeuta"
    },
    {
      id: "4",
      nome: "João",
      foto: '/img/img4.jpg',
      job: "Músico"
    },
    {
      id: "5",
      nome: "Antônio",
      foto: '/img/img5.jpg',
      job: "Engenheiro"
    },
    {
      id: "6",
      nome: "Daniel",
      foto: '/img/img6.jpg',
      job: "Designer"
    }
  ]

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <button onClick={toggleTheme} className='btn-change'>Alterar tema</button>
      <div className={darkTheme ? 'app dark-theme' : 'app'}>
        <h1>Perfil de usuários:</h1>
        <div className='container_cards'>
          {people.map((person) => (
            <People key={person.id} nome={person.nome} foto={person.foto} job={person.job} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
