import './NFT.scss';
import { RecoilRoot } from 'recoil';
import { Top } from './components/Top/Top';
import { Center } from './components/Center/Center';
import { Trending } from './components/Trending/Trending';

export const NFT = () => {
    return (
        <RecoilRoot>
            <div className={ "NFT-" + global.app_config.CSS_ID + " p-6" }>
                <div className="main-container w-full h-full rounded-3xl px-14 py-8">
                    <Top/>
                    <Center/>
                    <Trending/>
                </div>
            </div>
        </RecoilRoot>
    );
}