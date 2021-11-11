import "./Center.scss";
import { Counter, ECounter } from "./components/Counter/Counter";
import brain from "./img/brain-hd.png";
import smLogo from "./img/sm-logo.png";

export const Center = () => {
  return (
    <div className={"Center-" + global.app_config.CSS_ID + " sm:flex justify-evenly my-8 mx-1 xl:m-8 items-center text-white font-sans "}>
      <div className="center-left relative text-center sm:text-left overflow-hidden sm:overflow-visible">
        <div className="sm:hidden">
          <div className="text-4xl font-semibold tracking-widest">Hallucination</div>
          <div className="text-3xl xl:text-4xl font-semibold tracking-widest">Quest Album #2021</div>
        </div>
        <div className="hidden sm:block border-round-1 border-round rounded-full w-full h-full absolute -top-3 left-3" />
        <div className="hidden sm:block border-round-2 border-round rounded-full w-full h-full absolute -bottom-4 -left-5" />
        <img className="relative" src={brain} alt="brain" />
        <div className="ml-2 xl:ml-0 my-2 mb-8 sm:hidden">
          <img className="w-4 align-middle" src={smLogo} alt="smLogo" />
          <span className="text-xs align-middle ml-2">@vinterverdandi</span>
        </div>
      </div>
      <div className="center-right sm:ml-4 max-w-full md:max-w-1/2 sm:max-w-3/4 xl:ml-0 ">
        <div className="hidden sm:block">
          <div className="text-4xl font-semibold tracking-widest">Hallucination</div>
          <div className="text-3xl xl:text-4xl font-semibold tracking-widest">Quest Album #2021</div>
        </div>
        <div className="ml-2 xl:ml-0 my-4 md:my-6 lg:my-8 hidden sm:block">
          <img className="w-4 align-middle" src={smLogo} alt="smLogo" />
          <span className="text-xs align-middle ml-2">@vinterverdandi</span>
        </div>
        <div className="lg:flex justify-evenly">
          <div className="pl-2 lg:pl-0 pr-2 xl:pr-6 mb-2 lg:mb-0 mx-4 lg:mx-0">
            <div className="text-xs mb-1 md:mb-2">Current Bid</div>
            <div className="text-3xl xl:text-4xl">3.00 ETH</div>
            <div className="text-xs">$9000,00</div>
          </div>
          <div className="pl-2 xl:pl-6 border-center-right border-t-2 border-l-0 lg:border-l-2 lg:border-t-0">
            <div className="text-xs mb-2 mx-4 mt-2 lg:mt-0">Auction end in</div>
            <div className="flex justify-evenly">
              <Counter type={ECounter.H} typeString="Hours" />
              <Counter type={ECounter.M} typeString="Minutes" />
              <Counter type={ECounter.S} typeString="Secondes" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="button-center-right font-sans w-28 sm:w-32 text-xs sm:text-base lg:w-44 py-4 rounded-3xl mr-3">Place a Bid</button>
          <button className="button-center-right font-sans w-28 sm:w-32 text-xs sm:text-base lg:w-44 py-4 rounded-3xl ml-3">View Artwork</button>
        </div>
      </div>
    </div>
  );
};
