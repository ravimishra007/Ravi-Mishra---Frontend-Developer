import './App.css'
import {Avatar} from './components/Avatar'
import { Header } from './components/Header'
import { ItemSection } from './components/ItemSection'
import { RoadMapPhase02 } from './components/RoadMapPhase02'
import { RoadMapPhase01 } from './components/RoadMapPhase1'
import { TechTools } from './components/Technologies'
import { TextSection } from './components/TextSection'
import Tokenomics from './components/Tokenomics'

function App() {

  return (
    <>
    <div className="figma-app">
      <Header/>
      <TextSection/>
      <Avatar/>
      <TechTools/>
      <ItemSection/>
      <Tokenomics/>
      <RoadMapPhase01/>
      <RoadMapPhase02/>

    </div>

    </>
  )
}

export default App
