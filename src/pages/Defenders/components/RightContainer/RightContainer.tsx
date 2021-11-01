import { Defender } from './Defender/Defender';
import './RightContainer.scss';
import { useRecoilValue } from 'recoil';
import { _defenderAtom } from '../../DefendersModel';

export const RightContainer = () => {
    const defender = useRecoilValue(_defenderAtom);

    return (
    <div className={ "RightContainer-" + global.app_config.CSS_ID + " rounded-r-3xl p-7 overflow-hidden"}>
        <div className="relative">
            <div className="text-right">
                <span className="material-icons text-white cursor-pointer text-sm">close</span>
            </div>
            <Defender defender={defender}/>
        </div>
    </div>
    );
}