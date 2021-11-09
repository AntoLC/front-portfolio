import { ArtisteType } from '../TopArtistesModel';
import './Artiste.scss';

interface ArtisteProps {
    artiste: ArtisteType
}

export const Artiste = (props: ArtisteProps) => {
    const {artiste} = props;

    return (
        <div className={ "Artiste-" + global.app_config.CSS_ID + " " }>
            <img className="image-card rounded-2xl" src={process.env.REACT_APP_SRC + artiste.src } alt="artiste"/>
            <div className="flex justify-between font-sans">
                <span className="text-white">{artiste.name}</span>
                <span className="text-purple-300 font-medium">{artiste.price} ETH</span>
            </div>
        </div>
    );
}