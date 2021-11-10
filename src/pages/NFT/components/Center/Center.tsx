import './Center.scss';
import { Counter, ECounter } from './components/Counter/Counter';
import brain from './img/brain-hd.png';
import smLogo from './img/sm-logo.png';

export const Center = () => {
    return (
        <div className={ "Center-" + global.app_config.CSS_ID + " flex justify-evenly my-8 mx-1 xl:m-8 items-center" }>
            <div className="center-left relative">
                <div className="border-round-1 border-round rounded-full w-full h-full absolute -top-3 left-3"/>
                <div className="border-round-2 border-round rounded-full w-full h-full absolute -bottom-4 -left-5"/>
                <img className="relative" src={brain} alt="brain"/>
            </div>
            <div className="center-right text-white font-sans ml-4 xl:ml-0 ">
                <div>
                    <div className="text-4xl font-semibold tracking-widest">Hallucination</div>
                    <div className="text-3xl xl:text-4xl font-semibold tracking-widest">Quest Album #2021</div>
                </div>
                <div className="ml-2 xl:ml-0 my-8">
                    <img className="w-4 align-middle" src={smLogo}  alt="smLogo"/>
                    <span className="text-xs align-middle ml-2">@vinterverdandi</span>
                </div>
                <div className="flex justify-evenly">
                    <div className="pr-2 xl:pr-6">
                        <div className="text-xs mb-2">Current Bid</div>
                        <div className="text-3xl xl:text-4xl">3.00 ETH</div>
                        <div className="text-xs">$9000,00</div>
                    </div>
                    <div className="pl-2 xl:pl-6 border-center-right">
                        <div className="text-xs mb-2 mx-4">Auction end in</div>
                        <div className="flex justify-evenly">
                            <Counter type={ECounter.H} typeString="Hours"/>
                            <Counter type={ECounter.M} typeString="Minutes"/>
                            <Counter type={ECounter.S} typeString="Secondes"/>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button className="button-center-right font-sans px-12 py-4 rounded-3xl mr-3">Place a Bid</button>
                    <button className="button-center-right font-sans px-12 py-4 rounded-3xl ml-3">View Artwork</button>
                </div>
            </div>
        </div>
    );
}