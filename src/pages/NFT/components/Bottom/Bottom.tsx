import './Bottom.scss';
import dunno from './img/dunno-hd.png';
import smLogo from './img/sm-logo.png';

export const Bottom = () => {
    return (
        <div className={ "Bottom-" + global.app_config.CSS_ID + " flex justify-evenly m-8 items-center" }>
            <div className="center-right text-white font-sans">
                <div>
                    <div className="text-lg font-semibold tracking-widest text-purple-300 uppercase mb-4">Learn From us</div>
                    <div className="text-5xl font-semibold tracking-widest">How To Sell</div>
                    <div className="text-5xl font-semibold tracking-widest">Your First</div>
                    <div className="text-5xl font-semibold tracking-widest">NFTs</div>
                </div>
                <div className="text-base text-purple-300 my-4 w-96">
                    Set up an Ethereum Wallet. The first step in your NFT journey is to create a digital wallet where you'll securely store the crypto currency that is used to buy, sell, and crea NFTs.
                </div>
                <div className="mt-8 text-left">
                    <button className="button-center-right font-sans px-12 py-4 rounded-3xl mr-3">Learn now</button>
                    <button className="button-center-right font-sans px-12 py-4 rounded-3xl ml-3">Discover more</button>
                </div>
            </div>
            <div className="center-left relative text-center">
                <div className="border-round-1 border-round rounded-full w-96 h-96 absolute -top-3 left-10"/>
                <div className="border-round-2 border-round rounded-full w-96 h-96 absolute -bottom-10 -left-8"/>
                <img className="relative w-96" src={dunno}/>
            </div>
        </div>
    );
}