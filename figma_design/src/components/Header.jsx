import elonMusk from '../../public/elonMusk.png';
import billGates from '../../public/billGates.png';
import timCook from '../../public/timCook.png';
import trump from '../../public/trump.png';
import markZukarberg from '../../public/mark zukarberg.png';
import vitalikBitcoin from '../../public/vitalik bitcoin.png';
import biden from '../../public/biden.png';
import albertEintein from '../../public/albert einstein.png';
import barakObama from '../../public/obama.png';
import '../styles/navbar.css';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className="mx-auto w-full relative overflow-hidden header">
      <Navbar />
      <div className="md:flex p-10 mt-20">
        <header className="md:w-[50%] md:ml-40 mt-20">
          <button className="btn0 border px-2 py-1 text-sm rounded-lg bg-slate-900 border-slate-400">
            🎉 New in AI.GEN: Real Time Interaction
          </button>
          <h1 className="btn-h1 text-5xl mt-10">
            IOTA polygon serum ipsum WAX terraUSD gala THETA.
          </h1>
          <p className="btn-p text-md mt-8">
            Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor
            horizen ethereum quant bitcoin.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md py-4 px-8 border-0 mt-9">
            Get Started
          </button>
        </header>
        <aside className="hidden md:flex absolute md:relative top-[-30px] right-[-90px] gap-12">
          <div className="flex flex-col gap-10 img-animate-up-down">
            <img
              src={elonMusk}
              alt="elonMusk"
              className="w-44 h-44 object-cover rounded-xl"
            />
            <img
              src={billGates}
              alt="billGates"
              className="w-44 h-44 object-cover rounded-xl"
            />
            <img
              src={timCook}
              alt="timCook"
              className="w-44 h-44 object-cover rounded-xl"
            />
          </div>
          <div className="relative bottom-20 flex flex-col gap-10 img-animate-down-up">
            <img
              src={trump}
              alt="trump"
              className="w-44 h-44 object-cover rounded-xl"
            />
            <img
              src={markZukarberg}
              alt="markZukarberg"
              className="w-44 h-44 object-cover rounded-xl"
            />
            <img
              src={vitalikBitcoin}
              alt="vitalikBitcoin"
              className="w-44 h-44 object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-10 img-animate-up-down">
            <img
              src={biden}
              alt="biden"
              className="w-44 h-44 object-cover rounded-xl"
            />
            <img
              src={albertEintein}
              alt="albertEintein"
              className="w-44 h-44 object-cover rounded-xl"
            />
            <img
              src={barakObama}
              alt="barakObama"
              className="w-44 h-44 object-cover rounded-xl"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};
