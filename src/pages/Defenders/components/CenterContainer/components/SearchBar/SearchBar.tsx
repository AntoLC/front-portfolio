import './SearchBar.scss';
import user from './img/user.png';
interface SearchBarProps {

}

export const SearchBar = (props:SearchBarProps) => {
    return (
        <div className={"SearchBar-" + global.app_config.CSS_ID + " mb-8 px-6 py-3 rounded-xl flex justify-between"}>
            <div>
                <span className="input-icons material-icons rounded-l-xl pr-2 py-1 pl-2 h-8">search</span>
                <input className="font-sans text-sm rounded-r-xl py-1 h-8" type="text" placeholder="Search" />
            </div>
            <div>
                <span className="cursor-pointer notif-icon align-middle text-white material-icons border-r-1 border-white pr-3">notifications_none</span>
                <img className="cursor-pointer px-3" src={user} alt="user-img" />
                <span className="cursor-pointer align-middle text-white searchbar-icon material-icons ">more_horiz</span>
            </div>
        </div>
    );
}