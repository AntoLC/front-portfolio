import { CenterContainer } from './components/CenterContainer/CenterContainer';
import { LeftContainer } from './components/LeftContainer/LeftContainer';
import { RightContainer } from './components/RightContainer/RightContainer';
import './Defenders.scss';

export type DefendersType = {
    name:string;
    star:number;
    agency:string;
    agency_logo:string;
    src:string;
    guarding:number;
    aggression:number;
    courage:number;
    mind:number;
}

export const Defenders = () => {
    return (
    <div className={ "Defenders-" + global.app_config.CSS_ID + " bg-gray-bg flex flex-wrap content-center justify-center"}>
        <div className="container-big-main w-11/12 h-4/5 rounded-3xl relative">
            <div className="container-shadow-1 absolute w-full h-full rounded-3xl"></div>
            <div className="container-shadow-2 absolute w-full h-full rounded-3xl"></div>
            <div className="container-main relative w-full h-full rounded-3xl grid">
                <LeftContainer/>
                <CenterContainer/>
                <RightContainer/>
            </div>
        </div>
    </div>
    );
}