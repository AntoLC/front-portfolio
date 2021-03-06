import "./LeftContainer.scss";
import logo_avenger from "./img/logo-avenger.png";
import spiderman from "./img/spiderman.png";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { _defenderMenuVisibilityAtom } from "../../DefendersModel";

export const LeftContainer = () => {
  const hidden = " ";
  const block = " transition";
  const [visibility, setVisibility] = useState<string>(hidden);
  const [defenderMenuVisibility, setDefenderMenuVisibility] = useRecoilState(_defenderMenuVisibilityAtom);

  useEffect(() => {
    defenderMenuVisibility ? setVisibility(block) : setVisibility(hidden);
    return () => {};
  }, [defenderMenuVisibility]);

  return (
    <div
      className={
        "LeftContainer-" +
        global.app_config.CSS_ID +
        visibility +
        " rounded-3xl pt-6 pb-6 justify-between flex-col absolute top-0 z-10 w-full sm:h-full sm:flex md:rounded-none md:rounded-l-3xl md:relative"
      }
    >
      <div className="absolute right-5 md:hidden">
        <span className="material-icons text-white cursor-pointer text-sm" onClick={() => setDefenderMenuVisibility(false)}>
          &#xe5cd;
        </span>
      </div>
      <div>
        <div className="container-logo text-center mb-4">
          <img className="m-auto" src={logo_avenger} alt="logo_avenger" />
          <p className="mt-2 font-sans uppercase font-bold site-name background-gradient">Defenders</p>
          <p className="font-sans text-gray-100 site-slogan">Guarding your event</p>
        </div>
        <div className="container-menu mt-8">
          <MenuItem svg_name="widgets" text="Overview" />
          <MenuItem svg_name="people" text="Recruitment" />
          <MenuItem svg_name="domain" text="Agency" />
          <MenuItem svg_name="logout" text="Log out" />
        </div>
      </div>
      <div className="container-bottom text-center mt-8">
        <div className="container-point-effect">
          <div className="container-opacity-effect">
            <img className="m-auto" src={spiderman} alt="logo_avenger" />
          </div>
        </div>
        <div className="font-sans text-gray-100 site-slogan m-4">Keep up to date at hand</div>
        <div className="cursor-pointer m-5 p-1 rounded-full background-gradient">
          <div className="p-2 rounded-full font-sans text-gray-100 site-slogan background-origin">Download mobile app</div>
        </div>
      </div>
    </div>
  );
};
