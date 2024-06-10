import { useEffect } from "react";
import phase2 from "../../public/phase2.png";
import '../styles/avatar.css';

export const RoadMapPhase02 = () => {
    useEffect(() => {
      const paragraphs = document.querySelectorAll(".animated-paragraph");
      let current = 0;
  
      const updateParagraphs = () => {
        paragraphs.forEach((paragraph, index) => {
          if (index === current) {
            paragraph.classList.add("text-active");
            paragraph.classList.remove("text-inactive");
          } else {
            paragraph.classList.remove("text-active");
            paragraph.classList.add("text-inactive");
          }
        });
        current = (current + 1) % paragraphs.length;
      };
  
      updateParagraphs(); // Initial animation
      const interval = setInterval(updateParagraphs, 1000);
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    return (
      <div className="roadMap-section md:flex justify-center items-center gap-10 relative">
        <div className="roadMap-section-para">
          <h1 className="md:text-7xl text-3xl mt-5 font-semibold">PHASE 2</h1>
          <div className="roadMap-section-paragraph">
          <p className="animated-paragraph text-5xl mt-10 font-bold">- Horizen dai dai harmony dogecoin waves nexo. </p>
          <p className="animated-paragraph text-4xl mt-3 font-bold">- Flow horizen waves dash tether zcash waves dash terraUSD. </p>
          <p className="animated-paragraph text-4xl mt-3 font-bold">- Quant harmony amp cosmos PancakeSwap decentraland decred. </p>
          <p className="animated-paragraph text-4xl mt-3 font-bold">- Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</p>
        </div>
        </div>
        <div className="map-img1 md:w-[60%] md:rounded-r-lg rounded-lg overflow-hidden">
          <img src={phase2} alt="phase2-ai" className="overflow-hidden" />
        </div>

      </div>
    );
  };