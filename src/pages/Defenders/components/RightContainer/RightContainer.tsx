import { Defender } from './Defender/Defender';
import './RightContainer.scss';
import Defenders from '../../Defenders.json';

export const RightContainer = () => {
    return (
    <div className={ "RightContainer-" + global.app_config.CSS_ID + " rounded-r-3xl p-7"}>
        <div className="text-right">
            <span className="material-icons text-white cursor-pointer text-sm">close</span>
        </div>
        <Defender defender={Defenders[0]}/>
    </div>
    );
}