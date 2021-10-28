import react from "react";
import { Capsule } from "./components/Capsule/Capsule";
import './Frontpage.scss';

export const Frontpage = () => {
    return (
    <div className={ "Frontpage-" + global.app_config.CSS_ID + " h-screen"}>
        <div className="h-10">
            <div className="font-sans text-2xl text-gray-800 font-black mx-5">Capsule</div>
        </div>
        <div className="form-top-right"/>
        <Capsule isLogo={true} />
        <div className="h-screen flex flex-wrap content-center justify-center -m-10">
            <Capsule isLogo={false} />
            <div className="font-sans text-8xl text-gray-800 font-black">Capsule</div>
        </div>
        <div className="form-bottom-left"/>
    </div>
    );
}