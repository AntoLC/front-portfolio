import './CenterContainer.scss';
import { Agency } from '../Agency/Agency';
import { BlockRecruitment } from './components/BlockRecruitment/BlockRecruitment';
import { SearchBar } from './components/SearchBar/SearchBar';
import Defenders from '../../Defenders.json';

export const CenterContainer = () => {
    return (
    <div className={ "CenterContainer-" + global.app_config.CSS_ID + " p-7 flex justify-between flex-col"}>
        <div>
            <SearchBar/>
            <div className="flex justify-between">
                <span className="font-sans text-2xl text-white">Recruitements</span>
                <div>
                    <span className="material-icons text-gray-400 pr-4 cursor-pointer">arrow_back</span>
                    <span className="material-icons text-white pl-4 cursor-pointer">arrow_forward</span>
                </div>
            </div>
            <div className="flex justify-between">
            {
                Array.apply(0, Array(2)).map(function (item, index) {
                    return <BlockRecruitment key={"BlockRecruitment-"+index} recruitment={Defenders[index]}/>;
                })
            }
            </div>
        </div>
        <div className="agency-container mt-7 p-6 rounded-2xl">
            <div className="flex justify-between mb-5">
                <span className="font-sans text-xl text-white">Agency Rating</span>
                <div>
                    <span className="material-icons text-white cursor-pointer">more_horiz</span>
                </div>
            </div>
            {
                Array.apply(0, Array(Defenders.length)).map(function (item, index) {
                    return <Agency key={"Agency-"+index} agency={Defenders[index]} css="with-bg"/>;
                })
            }
        </div>
    </div>
    );
}