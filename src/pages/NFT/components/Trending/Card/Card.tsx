import { TrendingType } from '../TrendingModel';
import './Card.scss';

interface CardProps {
    trending: TrendingType
}

export const Card = (props: CardProps) => {
    const {trending} = props;

    return (
        <div className={ "Card-" + global.app_config.CSS_ID + " rounded-2xl p-2 md:p-4 lg:p-6" }>
            <div className="text-center"><img className="image-card rounded-2xl" src={process.env.REACT_APP_SRC + trending.src } alt="trending"/></div>
            <div className="lg:flex justify-between font-sans mt-4">
                <span className="text-white">{trending.name}</span>
                <span className="block lg:inline text-purple-300 font-medium">{trending.price} ETH</span>
            </div>
            <div className="flex justify-between font-sans mt-5">
                <div className="flex">
                    <div className="rounded-full w-6 h-6 bg-purple-700"></div>
                    <div className="rounded-full w-6 h-6 bg-green-400 -ml-2"></div>
                    <div className="rounded-full w-6 h-6 bg-gray-300 -ml-2 text-center">+</div>
                </div>
                <span className="text-white">Favorite this</span>
            </div>
            <div className="border-top flex justify-between font-sans mt-5 pt-5">
                <span className="text-gray-500 text-sm">Highest Bid</span>
                <span className="text-white">{trending.highest} ETH</span>
            </div>
        </div>
    );
}