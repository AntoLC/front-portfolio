import './LeftContainer.scss';
import logo_avenger from './img/logo-avenger.png';
import { MenuItem } from './components/MenuItem/MenuItem';

export const LeftContainer = () => {
    return (
    <div className={ "LeftContainer-" + global.app_config.CSS_ID + " rounded-l-3xl pt-6 pb-6"}>
        <div className="container-logo text-center mb-4">
            <img className="m-auto" src={logo_avenger} alt="logo_avenger" />
            <p className="mt-2 font-sans uppercase font-bold site-name">Defenders</p>
            <p className="font-sans text-gray-100 site-slogan">Guarding your event</p>
        </div>
        <div className="container-menu mt-8">
            <MenuItem svg_name="widgets" text="Overview"/>
            <MenuItem svg_name="people" text="Recruitment"/>
            <MenuItem svg_name="domain" text="Agency"/>
            <MenuItem svg_name="logout" text="Log out"/>
        </div>
        <div className="container-bottom">
            <div className="logo-name">Overview</div>
            <div className="logo-name">Keep up to date at hand</div>
            <div className="logo-under">Download mobile app</div>
        </div>
    </div>
    );
}