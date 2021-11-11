import './Bottom.scss';
import dunno from './img/dunno-hd.png';

export const Bottom = () => {
    return (
        <div className={ "Bottom-" + global.app_config.CSS_ID + " sm:flex justify-evenly m-8 sm:m-0 items-center" }>
            <div className="center-right text-white font-sans max-w-full md:max-w-1/2">
                <div>
                    <div className="text-lg font-semibold tracking-widest text-purple-300 uppercase mb-4">Learn From us</div>
                    <div className="block sm:hidden text-4xl font-semibold tracking-widest">How To Sell Your First NFTs</div>
                    <div className="hidden sm:block text-5xl font-semibold tracking-widest">How To Sell</div>
                    <div className="hidden sm:block text-5xl font-semibold tracking-widest">Your First</div>
                    <div className="hidden sm:block text-5xl font-semibold tracking-widest">NFTs</div>
                </div>
                <div className="text-sm text-purple-300 my-4 w-auto lg:w-96 pr-5">
                    Set up an Ethereum Wallet. The first step in your NFT journey is to create a digital wallet where you'll securely store the crypto currency that is used to buy, sell, and crea NFTs.
                </div>
                <div className="mt-8 text-center md:text-left">
                    <button className="button-center-right font-sans w-44 sm:w-32 md:w-36 lg:w-44 py-4 rounded-3xl mr-1 xl:mr-3">Learn now</button>
                    <button className="button-center-right font-sans w-44 sm:w-32 md:w-36 lg:w-44 py-4 rounded-3xl ml-1 xl:ml-3">Discover more</button>
                </div>
            </div>
            <div className="hidden sm:block center-left relative text-center">
                <div className="hidden sm:block border-round-1 border-round rounded-full sm:w-32 md:w-80 lg:w-96 sm:h-32 md:h-80 lg:h-96 absolute -top-3 left-10"/>
                <div className="hidden sm:block border-round-2 border-round rounded-full sm:w-32 md:w-80 lg:w-96 sm:h-32 md:h-80 lg:h-96 absolute -bottom-10 -left-8"/>
                <img className="relative w-96" src={dunno} alt="dunno"/>
            </div>
        </div>
    );
}