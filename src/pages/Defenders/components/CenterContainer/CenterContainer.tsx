import './CenterContainer.scss';
import { SearchBar } from './components/SearchBar/SearchBar';

export const CenterContainer = () => {
    return (
    <div className={ "CenterContainer-" + global.app_config.CSS_ID + ""}>
        <SearchBar/>
    </div>
    );
}