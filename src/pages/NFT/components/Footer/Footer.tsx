import './Footer.scss';

export const Footer = () => {
    return (
        <div className={ "Footer-" + global.app_config.CSS_ID + " mt-16 flex justify-between py-20 px-24 font-sans rounded-b-3xl" }>
            <div>
                <div className="user-container">
                    <span className="form inline-block w-9 h-9 rounded-full align-middle cursor-pointer"/>
                    <span className="text-2xl font-semibold text-white align-middle ml-2">Ae.</span>
                </div>
                <div className="text-purple-400 mt-8">Super Rare 3D NFTs</div>
            </div>
            <div className="">
                <div className="text-white font-semibold mb-6 cursor-pointer">Marketplace</div>
                <div className="text-purple-300 my-4 text-sm cursor-pointer">New</div>
                <div className="text-purple-300 my-4 text-sm cursor-pointer">Connect Wallet</div>
                <div className="text-purple-300 my-4 text-sm cursor-pointer">Utility</div>
            </div>
            <div className="">
                <div className="text-white font-semibold mb-6 cursor-pointer">Stats</div>
                <div className="text-purple-300 my-4 text-sm cursor-pointer">Ranking</div>
                <div className="text-purple-300 my-4 text-sm cursor-pointer">Activity</div>
                <div className="text-purple-300 my-4 text-sm cursor-pointer">Support</div>
            </div>
            <div className="">
                <div className="text-white font-semibold mb-6 cursor-pointer">Join Newsletter</div>
                <div className="text-purple-400 text-sm ">Lorem ipsum dolor sit amet, consectur adipiscing elit.</div>
                <div className="mt-5 subscribe-container px-6 py-2 pr-2 rounded-full flex justify-between items-center">
                    <input className="bg-transparent text-gray-300 text-sm " placeholder="Enter your email" />
                    <button className="rounded-full text-white px-6 py-2">Subscribe</button>
                </div>
            </div>
        </div>
    );
}