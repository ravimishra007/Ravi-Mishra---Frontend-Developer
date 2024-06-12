import "./App.css";
import { Avatar } from "./components/Avatar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ItemSection } from "./components/ItemSection";
import { RoadMaps } from "./components/RoadMaps";
import { TechTools } from "./components/Technologies";
import { TextSection } from "./components/TextSection";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <>
      <div className="figma-app">
        <Header />
        <TextSection />
        <Avatar />
        <TechTools />
        <ItemSection />
        <Tokenomics />
        <div className="main-container">
          <RoadMaps/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
