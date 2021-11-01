import './CenterContainer.scss';
import { Agency } from '../Agency/Agency';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ScrollBlockRecruitment } from './components/ScrollBlockRecruitment/ScrollBlockRecruitment';
import { Defenders } from '../../DefendersModel';

export const CenterContainer = () => {
    return (
    <div className={ "CenterContainer-" + global.app_config.CSS_ID + " p-7 flex justify-between flex-col"}>
        <div>
            <SearchBar/>
            <ScrollBlockRecruitment defenders={Defenders}/>
        </div>
        <div className="agency-container mt-7 p-6 rounded-2xl">
            <div className="flex justify-between mb-5">
                <span className="font-sans text-xl text-white">Agency Rating</span>
                <div>
                    <span className="material-icons text-white cursor-pointer">more_horiz</span>
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