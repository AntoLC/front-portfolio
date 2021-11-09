import './CenterContainer.scss';
import { Agency } from '../Agency/Agency';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ScrollBlockRecruitment } from './components/ScrollBlockRecruitment/ScrollBlockRecruitment';
import { Defenders, _defenderMenuVisibilityAtom, _defenderVisibilityAtom } from '../../DefendersModel';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

export const CenterContainer = () => {
    const [defenderMenuVisibility, setDefenderMenuVisibility] = useRecoilState(_defenderMenuVisibilityAtom);
    const [defenderVisibility, setDefenderVisibility] = useRecoilState(_defenderVisibilityAtom);
    const CenterContainerRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if(!defenderMenuVisibility && !defenderVisibility && CenterContainerRef.current){
            // console.debug("Yoo", CenterContainerRef.current.clientHeight);
            // console.debug("Yoo1", window.screen.availHeight);
            // console.debug("Yoo2", document.body.clientHeight);

            //document.body.clientHeight = CenterContainerRef.current.clientHeight
            //CenterContainerRef.current?.clientHeight
            // window.resizeTo(
            //     window.screen.availWidth,
            //     CenterContainerRef.current.clientHeight
            //   );
        }

        return ()=>{};
    }, [defenderMenuVisibility, defenderVisibility]);

    return (
    <div ref={CenterContainerRef} className={ "CenterContainer-" + global.app_config.CSS_ID + " p-2 sm:p-7 flex justify-between flex-col min-h-screen "}>
        <div>
            <SearchBar/>
            <ScrollBlockRecruitment defenders={Defenders}/>
        </div>
        <div className="agency-container mt-5 sm:mt-7 p-6 rounded-2xl">
            <div className="flex justify-between mb-5">
                <span className="font-sans text-xl text-white">Agency Rating</span>
                <div>
                    <span className="material-icons text-white cursor-pointer">&#xe5d3;</span>
                </div>
            </div>
            {
                Defenders.map(function (item, index) {
                    return <Agency key={"Agency-"+index} agency={Defenders[index]} css="with-bg"/>;
                })
            }
        </div>
    </div>
    );
}