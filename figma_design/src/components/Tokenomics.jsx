// import Holder from '../../public/Holder.png'
import Donut from "../../public/Donut.png";
import "../styles/tokenomics.css";

const Tokenomics = () => {
  return (
    <div className=" tokenomics text-center p-10">
      <h1 className="font-semibold text-5xl my-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
        Tokenomics
      </h1>
      <div className="token-list flex justify-center gap-6">
        <div className=" grid grid-cols-[1fr,10px,1fr] gap-1 text-left">
          <p className="font-semibold">Name</p>
          <p>:</p>
          <p className="ml-4 text-slate-300">AI GEN</p>
          <p className="font-semibold">Total Supply</p>
          <p>:</p>
          <p className="ml-4 text-slate-300"> 1B</p>
          <p className="font-semibold">Contract</p>
          <p>:</p>
          <p className="ml-4 text-slate-300"> Lorem ipsum dolor sit a...</p>
        </div>
        <div className=" grid grid-cols-[1fr,10px,1fr] gap-1 text-left">
          <p className="font-semibold">Token Name</p>
          <p>:</p>
          <p className="ml-4 text-slate-300">$AIGEN</p>
          <p className="font-semibold">Circulating Supply</p>
          <p>:</p>
          <p className="ml-4 text-slate-300">1B</p>
          <p className="font-semibold">Chain</p>
          <p>:</p>
          <p className="ml-4 text-slate-300">Ethereum</p>
        </div>
      </div>
      <div className=" flex justify-center items-center p-5 gap-8 mt-5">
        <img src={Donut} alt="Donut" className=" w-1/2" />
        <div className="lg:mr-40">
          <div className="token-data w-44 lg:w-full flex   rounded-lg m-2">
            <span className="w-2 lg:w-6 bg-[#BE2C2C] dir-ltr rounded-s-lg "></span>
            <div className=" lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2">
              <span className="lg:w-36 font-semibold">Partnership</span>
              <span>:</span>
              <span>5% tokens</span>
            </div>
          </div>
          <div className="w-44 lg:w-full flex token-data rounded-lg m-2">
            <span className="w-2 lg:w-6 bg-[#FF8F34] dir-ltr rounded-s-lg "></span>
            <div className=" lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2">
              <span className="lg:w-36 font-semibold">LP Pool</span>
              <span>:</span>
              <span>35% tokens</span>
            </div>
          </div>
          <div className="token-data w-44 lg:w-full flex  rounded-lg m-2">
            <span className="w-2 lg:w-6 bg-[#9934FF] dir-ltr rounded-s-lg "></span>
            <div className="lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2">
              <span className="lg:w-36 font-semibold">Burned</span>
              <span>:</span>
              <span>30% tokens</span>
            </div>
          </div>
          <div className="token-data w-44 lg:w-full flex   rounded-lg m-2">
            <span className="w-2 lg:w-6 bg-[#028DFD] dir-ltr rounded-s-lg "></span>
            <div className="lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2">
              <span className="lg:w-36 font-semibold">BNB LP Pool</span>
              <span>:</span>
              <span>30% tokens</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
