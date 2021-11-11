import './Footer.scss';

export const Footer = () => {
    return (
        <div className={ "Footer-" + global.app_config.CSS_ID + " mt-16 flex flex-wrap lg:flex-nowrap justify-between py-12 sm:py-20 px-4 sm:px-24 font-sans rounded-b-3xl" }>
            <div className="mx-3 lg:mx-0 mb-6 md:mb-0">
                <div className="user-container">
                    <span className="form inline-block w-9 h-9 rounded-full align-middle cursor-pointer"/>
                    <span className="text-2xl font-semibold text-white align-middle ml-2">Ae.</span>
                </div>
                <div className="text-purple-400 md:mt-8">Super Rare 3D NFTs</div>
            </div>
            <div className="mx-3 lg:mx-0 mb-6 md:mb-0">
                <div className="text-white font-semibold mb-0 lg:mb-6 cursor-pointer">Marketplace</div>
                <div className="text-purple-300 my-1 xl:my-4 text-sm cursor-pointer">New</div>
                <div className="text-purple-300 my-1 xl:my-4 text-sm cursor-pointer">Connect Wallet</div>
                <div className="text-purple-300 my-1 xl:my-4 text-sm cursor-pointer">Utility</div>
            </div>
            <div className="mx-3 lg:mx-0 mb-6 lg:mb-0">
                <div className="text-white font-semibold mb-0 lg:mb-6 cursor-pointer">Stats</div>
                <div className="text-purple-300 my-1 xl:my-4 text-sm cursor-pointer">Ranking</div>
                <div className="text-purple-300 my-1 xl:my-4 text-sm cursor-pointer">Activity</div>
                <div className="text-purple-300 my-1 xl:my-4 text-sm cursor-pointer">Support</div>
            </div>
            <div className="mx-3 lg:mx-0 mb-6 md:mb-0">
                <div className="text-white font-semibold mb-0 lg:mb-6 cursor-pointer">Join Newsletter</div>
                <div className="text-purple-400 text-sm ">Lorem ipsum dolor sit amet, consectur adipiscing elit.</div>
                <div className="mt-2 md:mt-5 subscribe-container px-2 sm:px-6 py-2 sm:pr-2 rounded-full flex justify-between items-center">
                    <input className="bg-transparent text-gray-300 text-sm " placeholder="Enter your email" />
                    <button className="rounded-full text-white px-2 sm:px-6 py-2">Subscribe</button>
                </div>
            </div>
        </div>
    );
}