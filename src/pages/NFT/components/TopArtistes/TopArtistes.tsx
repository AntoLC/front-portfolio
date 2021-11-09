import { Artiste } from './Artiste/Artiste';
import './Trending.scss';
import { TopArtistesList } from './TopArtistesModel';

export const TopArtistes = () => {
    return (
        <div className={ "TopArtistes-" + global.app_config.CSS_ID + " mt-20" }>
            <div className="font-medium text-xl text-center">Top Artiste over last 7 days</div>
            <div className="grid gap-8 grid-cols-3">
                {
                    TopArtistesList.map(function (item, index) {
                        return <Artiste key={"TopArtistes-"+index} artiste={item}/>;
                    })
                }
            </div>
        </div>
    );
}