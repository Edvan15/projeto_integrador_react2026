import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BotoesDinamicos from './Atividade_06/05/2026/BotoesDinamicos'
import CardAluno from './Atividade_06/05/2026/CardAluno'
import CssInline from './Atividade_06/05/2026/CssInline'
import GridProdutos from './Atividade_06/05/2026/GridProdutos'
import ListaAlunos from './Atividade_06/05/2026/ListaAlunos'
import ListaFilmes from './Atividade_06/05/2026/ListaFilmes'
import ListaProdutos from './Atividade_06/05/2026/ListaProdutos'
import ListaTarefas from './Atividade_06/05/2026/ListaTarefas'
import MenuHorizontal from './Atividade_06/05/2026/MenuHorizontal'
import TelaUsuarios from './Atividade_06/05/2026/TelaUsuarios'
import VitrineLoja from './Atividade_06/05/2026/VitrineLoja'


function App() {

  return (
    <>
      <div>
        <BotoesDinamicos />
        <CardAluno />
        <CssInline />
        <GridProdutos />
        <ListaAlunos />
        <ListaFilmes />
        <ListaProdutos />
        <ListaTarefas />
        <MenuHorizontal />
        <TelaUsuarios />
        <VitrineLoja />
      </div>
    </>
  )
}

export default App
