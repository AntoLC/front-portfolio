import { ArtisteType } from '../TopArtistesModel';
import './Artiste.scss';
import eth from './img/eth.png';

interface ArtisteProps {
    artiste: ArtisteType
}

export const Artiste = (props: ArtisteProps) => {
    const {artiste} = props;

    return (
        <div className={ "Artiste-" + global.app_config.CSS_ID + " text-center lg:text-left lg:flex justify-start py-8" }>
            <img className="w-14 h-14 xl:w-auto xl:h-auto image-card rounded-2xl" src={process.env.REACT_APP_SRC + artiste.src } alt="artiste"/>
            <div className="font-sans text-white ml-2 xl:ml-7">
                <div><span className="font-medium">{artiste.name}</span></div>
                <div className="mt-2 "><img className="" src={eth} alt="eth"/><span className="font-extralight ml-2">{artiste.price}</span></div>
            </div>
        </div>
    );
}