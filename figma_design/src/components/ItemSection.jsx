import shoesPic from '../../public/card1.png'
import girlPic from '../../public/card2.png'
import keyBoard from '../../public/card3.png'
import detailsPic from '../../public/card4.png'
import '../styles/itemSection.css'

export const ItemSection = () => {
  return (
    <div className="itemSection-container">
      <div className="relative top-[10%] w-full">
        <div className=" w-full h-[30%] flex justify-center items-center gap-12">
          <img
            src={shoesPic}
            width={400}
            height={500}
            alt="...img"
            className="shoesPic w-[28%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={girlPic}
            width={600}
            height={300}
            alt="...img"
            className="girlPic w-[40%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="relative top-[20%] my-[3%] w-full h-[30%] flex justify-center items-center gap-12">
          <img
            src={keyBoard}
            width={600}
            height={300}
            alt="...img"
            className="keyBoard w-[40%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={detailsPic}
            width={400}
            height={500}
            alt="...img"
            className="detailsPic w-[28%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

