import { CenterContainer } from './components/CenterContainer/CenterContainer';
import { LeftContainer } from './components/LeftContainer/LeftContainer';
import { RightContainer } from './components/RightContainer/RightContainer';
import './Defenders.scss';
import { RecoilRoot } from 'recoil';

export const Defenders = () => {
    return (
        <RecoilRoot>
            <div className={ "Defenders-" + global.app_config.CSS_ID + " px-0 sm:pt-14 sm:pb-16 min-h-screen bg-gray-bg flex flex-wrap sm:content-center justify-center overflow-x-hidden"}>
                <div className="container-big-main w-full h-full sm:w-11/12 sm:h-4/5 rounded-3xl relative">
                    <div className="hidden sm:block container-shadow-1 absolute w-full h-full rounded-3xl"></div>
                    <div className="hidden sm:block container-shadow-2 absolute w-full h-full rounded-3xl"></div>
                    <div className="block sm:grid container-main relative w-full min-h-screen h-full sm:rounded-3xl">
                        <LeftContainer/>
                        <CenterContainer/>
                        <RightContainer/>
                    </div>
                </div>
            </div>
        </RecoilRoot>
    );
}