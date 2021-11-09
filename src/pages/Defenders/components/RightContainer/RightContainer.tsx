import { Defender } from './Defender/Defender';
import './RightContainer.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { _defenderAtom, _defenderVisibilityAtom } from '../../DefendersModel';
import { useEffect, useState } from 'react';

export const RightContainer = () => {
    const defender = useRecoilValue(_defenderAtom);
    const hidden = " ";
    const block = " transition";
    const [visibility, setVisibility] = useState<string>(hidden);
    const [defenderVisibility, setDefenderVisibility] = useRecoilState(_defenderVisibilityAtom);

    useEffect(() => {
        (defenderVisibility) ? setVisibility(block) : setVisibility(hidden);
    }, [defenderVisibility]);

    return (
    <div className={ "RightContainer-" + global.app_config.CSS_ID + visibility +" p-7 overflow-hidden w-full min-h-screen sm:min-h-full sm:mb-8 absolute top-0 rounded-3xl md:rounded-r-3xl md:block "}>
        <div className="relative">
            <div className="text-right">
                <span className="material-icons text-white cursor-pointer text-sm" onClick={()=> setDefenderVisibility(false)}>&#xe5cd;</span>
            </div>
            <Defender defender={defender}/>
        </div>
    </div>
    );
}