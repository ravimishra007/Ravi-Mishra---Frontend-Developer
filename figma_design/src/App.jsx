import './App.css'
import {Avatar} from './components/Avatar'
import { Header } from './components/Header'
import { TechTools } from './components/Technologies'
import { TextSection } from './components/TextSection'
import {Tokenomics} from './components/Tokenomics'

function App() {

  return (
    <>
    <div className="figma-app">
      <Header/>
      <TextSection/>
      <Avatar/>
      <TechTools/>
      <Tokenomics/>
    </div>

    </>
  )
}

export default App
