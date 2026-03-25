import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botao from './componentes/botao'
import Titulo from './componentes/titulo'
import Aluno from './componentes/aluno'
import BotaoSaudacao from './atividades/Exercicio1'

function App() {

  return (
    <>
      <div>
          <Titulo/>
          <Mensagem/>
          <BotaoSaudacao/>
      </div>
    </>
  )
}

export default App
