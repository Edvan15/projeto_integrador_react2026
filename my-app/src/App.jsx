import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Atividade from './atividades/Atividade'
import Aluno from './componentes/aluno'
import Botao from './componentes/botao'
import Titulo from './componentes/titulo'
import Exercicio1 from './atividades/Exercicio1'
import Exercicio2 from './atividades/Exercicio2'

function App() {

  return (
    <>
      <div>
          <Exercicio1 />
      </div>
    </>
  )
}

export default App
