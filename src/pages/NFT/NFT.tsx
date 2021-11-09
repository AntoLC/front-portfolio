import './NFT.scss';
import { RecoilRoot } from 'recoil';
import { Top } from './components/Top/Top';

export const NFT = () => {
    return (
        <RecoilRoot>
            <div className={ "NFT-" + global.app_config.CSS_ID + " p-6" }>
                <div className="main-container w-full h-full rounded-3xl px-14 py-8">
                    <Top/>
                </div>
            </div>
        </RecoilRoot>
    );
}