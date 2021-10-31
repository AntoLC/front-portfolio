import './CenterContainer.scss';
import { Agency } from './components/Agency/Agency';
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
        },
        {
            name:"Rock",
            star:3,
            agency:"Fantastic Four",
            agency_logo:"gpp_maybe",
            src:"fourf.jpg"
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
        {
            Array.apply(0, Array(2)).map(function (x, i) {
                return <BlockRecruitment recruitment={recruitments[i]}/>;
            })
        }
        </div>
        <div className="agency-container mt-7 p-6 rounded-2xl">
            <div className="flex justify-between mb-5">
                <span className="font-sans text-xl text-white">Agency Rating</span>
                <div>
                    <span className="material-icons text-white">more_horiz</span>
                </div>
            </div>
            {
                Array.apply(0, Array(recruitments.length)).map(function (x, i) {
                    return <Agency agency={recruitments[i]}/>;
                })
            }
        </div>
    </div>
    );
}