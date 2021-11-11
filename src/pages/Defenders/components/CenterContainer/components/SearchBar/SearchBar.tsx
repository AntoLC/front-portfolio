import "./SearchBar.scss";
import user from "./img/user.png";
import { useRecoilState } from "recoil";
import { _defenderMenuVisibilityAtom, _defenderSearchAtom } from "../../../../DefendersModel";

export const SearchBar = () => {
  const [, setDefenderSearchAtom] = useRecoilState(_defenderSearchAtom);
  const [, setDefenderMenuVisibility] = useRecoilState(_defenderMenuVisibilityAtom);

  return (
    <div className={"SearchBar-" + global.app_config.CSS_ID + " mb-5 sm:mb-8 px-2 sm:px-6 py-3 rounded-xl flex justify-between"}>
      <div className="">
        <span className="input-icons material-icons rounded-l-xl px-1 sm:px-2 py-1 h-8">search</span>
        <input
          className="w-2/3 font-sans text-sm rounded-r-xl py-1 h-8"
          type="text"
          placeholder="Search"
          onChange={(e) => setDefenderSearchAtom(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="cursor-pointer notif-icon text-white material-icons border-r-1 border-white pr-1 sm:pr-3">notifications_none</span>
        <img className="cursor-pointer px-1 sm:px-3" src={user} alt="user-img" />
        <span className="cursor-pointer text-white searchbar-icon material-icons md:hidden" onClick={() => setDefenderMenuVisibility(true)}>
          &#xe5d3;
        </span>
      </div>
    </div>
  );
};
