
const Tokenomics = () => {
  return (
    <div className=" text-center p-10">
      <h1 className="font-semibold text-5xl my-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
        Tokenomics
      </h1>
      <div className="flex justify-center gap-6">
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
            <p >:</p>
            <p className="ml-4 text-slate-300">$AIGEN</p>
            <p className="font-semibold">Circulating Supply</p>
            <p>:</p>
            <p className="ml-4 text-slate-300">1B</p>
            <p className="font-semibold">Chain</p>
            <p >:</p>
            <p className="ml-4 text-slate-300">Ethereum</p>
        </div>
      </div>
      <div className=" flex justify-center items-center p-5 gap-8 mt-5">
        <img src="/Donut.png" alt="Donut" className=" w-1/2" />
        <img src="/Holder.png" alt="Holder" className=" w-[40%]" />
      </div>
    </div>
  );
};

export default Tokenomics;
