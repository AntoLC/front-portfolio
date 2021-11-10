import { Artiste } from './Artiste/Artiste';
import './TopArtistes.scss';
import { TopArtistesList } from './TopArtistesModel';

export const TopArtistes = () => {
    return (
        <div className={ "TopArtistes-" + global.app_config.CSS_ID + " mt-24 text-white font-sans" }>
            <div className="font-medium text-3xl text-center">Top Artists over last 7 days</div>
            <div className="grid grid-cols-3 p-20 py-12">
            {
                TopArtistesList.map(function (item, index) {
                    return <Artiste key={"TopArtistes-"+index} artiste={item}/>;
                })
            }
            </div>
        </div>
    );
}