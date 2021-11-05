import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { DefendersType, _defenderSearchAtom } from '../../../../DefendersModel';
import { BlockRecruitment } from '../BlockRecruitment/BlockRecruitment';
import './ScrollBlockRecruitment.scss';


interface BlockRecruitmentProps {
    defenders: DefendersType[]
}

export const ScrollBlockRecruitment = (props:BlockRecruitmentProps) => {
    const {defenders} = props;
    const scrollBlockRecruitment = useRef<null | HTMLDivElement>(null);
    const textGray = "text-gray-400";
    const textWhite = "cursor-pointer text-white";
    const [arrowLeft, setArrowLeft] = useState<string>(textGray);
    const [arrowRight, setArrowRight] = useState<string>(textWhite);
    const defenderSearch = useRecoilValue(_defenderSearchAtom);
    
    const handleClickBack = () => {
        if(!scrollBlockRecruitment || !scrollBlockRecruitment.current ) return;
        scrollBlockRecruitment.current.scrollTo({ behavior: 'smooth', left:0 });
        setArrowRight(textWhite);
        setArrowLeft(textGray);
    };

    const handleClickForward = () => {
        if(!scrollBlockRecruitment || !scrollBlockRecruitment.current ) return;
        scrollBlockRecruitment.current.scrollTo({ behavior: 'smooth', left:880 });
        setArrowRight(textGray);
        setArrowLeft(textWhite);
    };

    return (
        <div className={"ScrollBlockRecruitment-" + global.app_config.CSS_ID + " text-center"}>
            <div className="flex justify-between">
                <span className="font-sans text-2xl text-white">Recruitements</span>
                <div>
                    <span className={"material-icons pr-4 " + arrowLeft} onClick={handleClickBack}>arrow_back</span>
                    <span className={"material-icons text-white pl-4 " + arrowRight} onClick={handleClickForward}>arrow_forward</span>
                </div>
            </div>
            <div ref={scrollBlockRecruitment} className="scroller inline-block text-left whitespace-nowrap overflow-hidden">
            {
                Array.apply(0, Array(3)).map(function (item, index) {
                    if(!defenderSearch || defenders[index].name.includes(defenderSearch))
                        return <BlockRecruitment key={"BlockRecruitment-"+index} defender={defenders[index]}/>;
                })
            }
            </div>
        </div>
    );
}