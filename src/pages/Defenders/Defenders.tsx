import { CenterContainer } from './components/CenterContainer/CenterContainer';
import { LeftContainer } from './components/LeftContainer/LeftContainer';
import { RightContainer } from './components/RightContainer/RightContainer';
import './Defenders.scss';
import { RecoilRoot } from 'recoil';

export const Defenders = () => {
    const css_base = " justify-center overflow-hidden min-h-screen bg-gray-bg flex flex-wrap px-0 ";
    const css_sm = " sm:pt-10 sm:content-center";
    const css_above = " md:pt-14 md:pb-14 md:pb-16 ";

    return (
        <RecoilRoot>
            <div className={ "Defenders-" + global.app_config.CSS_ID + css_base + css_sm + css_above}>
                <div className="container-big-main w-full h-full sm:w-11/12 sm:h-4/5 rounded-3xl relative">
                    <div className="hidden container-shadow-1 absolute w-full h-full rounded-3xl sm:block "></div>
                    <div className="hidden container-shadow-2 absolute w-full h-full rounded-3xl sm:block "></div>
                    <div className="block container-main relative w-full min-h-screen h-full sm:rounded-3xl md:grid ">
                        <LeftContainer/>
                        <CenterContainer/>
                        <RightContainer/>
                    </div>
                </div>
            </div>
        </RecoilRoot>
    );
}