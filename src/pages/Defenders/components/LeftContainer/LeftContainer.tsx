import './LeftContainer.scss';
import logo_avenger from './img/logo-avenger.png';

export const LeftContainer = () => {
    return (
    <div className={ "LeftContainer-" + global.app_config.CSS_ID + " rounded-l-3xl p-6"}>
        <div className="container-logo text-center mb-4">
            <img className="m-auto" src={logo_avenger} alt="logo_avenger" />
            <div className="mt-2 font-sans uppercase font-bold site-name">Defenders</div>
            <div className="font-sans text-gray-100 site-slogan">Guarding your event</div>
        </div>
        <div className="container-menu">
            <div className="logo-name">Overview</div>
            <div className="logo-name">Recruitment</div>
            <div className="logo-under">Agency</div>
            <div className="logo-under">Log out</div>
        </div>
        <div className="container-bottom">
            <div className="logo-name">Overview</div>
            <div className="logo-name">Keep up to date at hand</div>
            <div className="logo-under">Download mobile app</div>
        </div>
    </div>
    );
}