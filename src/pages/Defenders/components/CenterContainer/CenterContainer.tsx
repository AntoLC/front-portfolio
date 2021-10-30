import './CenterContainer.scss';
import { SearchBar } from './components/SearchBar/SearchBar';

export const CenterContainer = () => {
    return (
    <div className={ "CenterContainer-" + global.app_config.CSS_ID + " p-7 "}>
        <SearchBar/>
        <div className="flex justify-between"><span>Recruitements</span><div><span className="material-icons ">arrow_back</span><span className="material-icons ">arrow_forward</span></div></div>
    </div>
    );
}