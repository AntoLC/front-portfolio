import './SearchBar.scss';

interface SearchBarProps {

}

export const SearchBar = (props:SearchBarProps) => {
    return (
        <div className={"SearchBar-" + global.app_config.CSS_ID + " m-7 px-6 py-3 rounded-xl"}>
            <span className="material-icons rounded-l-xl pr-2 py-1 pl-2 h-8">search</span><input className="font-sans text-sm rounded-r-xl py-1 h-8" type="text" placeholder="Search" />
        </div>
    );
}