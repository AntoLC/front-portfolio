import { Card } from './Card/Card';
import './Trending.scss';
import { Trendings } from './TrendingModel';

export const Trending = () => {
    return (
        <div className={ "Trending-" + global.app_config.CSS_ID + " mt-24" }>
            <div className="flex justify-between text-white font-sans mb-8 px-4">
                <div>
                    <span className="font-medium text-xl align-middle">Trending Auction</span>
                    <span className="material-icons align-middle ml-4 text-yellow-400">&#xe80e;</span>
                </div>
                <span className="text-purple-300 text-sm">View all auction</span>
            </div>
            <div className="grid gap-8 grid-cols-3">
                {
                    Trendings.map(function (item, index) {
                        return <Card key={"Trending-"+index} trending={item}/>;
                    })
                }
            </div>
        </div>
    );
}