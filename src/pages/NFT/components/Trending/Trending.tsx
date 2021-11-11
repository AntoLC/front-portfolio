import { Card } from './Card/Card';
import './Trending.scss';
import { Trendings } from './TrendingModel';

export const Trending = () => {
    return (
        <div className={ "Trending-" + global.app_config.CSS_ID + " mt-16 lg:mt-24" }>
            <div className="flex justify-between text-white font-sans mb-4 lg:mb-8 px-4">
                <div>
                    <span className="font-medium text-xl align-middle">Trending Auction</span>
                    <span className="material-icons align-middle ml-4 text-yellow-400">&#xe80e;</span>
                </div>
                <span className="rounded-full py-2 px-0 sm:px-6 v-all text-purple-300 text-sm cursor-pointer">View all auction</span>
            </div>
            <div className="grid gap-2 sm:gap-8 md:gap-4 grid-cols-2 md:grid-cols-3">
                {
                    Trendings.map(function (item, index) {
                        return <Card key={"Trending-"+index} trending={item}/>;
                    })
                }
            </div>
        </div>
    );
}