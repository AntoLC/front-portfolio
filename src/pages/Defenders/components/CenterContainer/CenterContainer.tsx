import './CenterContainer.scss';
import { BlockRecruitment } from './components/BlockRecruitment/BlockRecruitment';
import { SearchBar } from './components/SearchBar/SearchBar';

export const CenterContainer = () => {
    const recruitments = [{
            name:"Deadpool",
            star:4,
            agency:"X-Men",
            agency_logo:"cancel",
            src:"deadpool.jpg"
        },
        {
            name:"Hulk",
            star:5,
            agency:"The Shield",
            agency_logo:"gpp_maybe",
            src:"hulk-scare.jpg"
        }
    ];

    return (
    <div className={ "CenterContainer-" + global.app_config.CSS_ID + " p-7 "}>
        <SearchBar/>
        <div className="flex justify-between">
            <span className="font-sans text-2xl text-white">Recruitements</span>
            <div>
                <span className="material-icons text-gray-400 pr-4">arrow_back</span>
                <span className="material-icons text-white pl-4">arrow_forward</span>
            </div>
        </div>
        <div className="flex justify-between">
            <BlockRecruitment recruitment={recruitments[0]}/>
            <BlockRecruitment recruitment={recruitments[1]}/>
        </div>
    </div>
    );
}