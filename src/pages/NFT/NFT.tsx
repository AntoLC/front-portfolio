import './NFT.scss';
import { RecoilRoot } from 'recoil';
import { Top } from './components/Top/Top';
import { Center } from './components/Center/Center';
import { Trending } from './components/Trending/Trending';
import { TopArtistes } from './components/TopArtistes/TopArtistes';
import { Bottom } from './components/Bottom/Bottom';
import { Categories } from './components/Categories/Categories';
import { Footer } from './components/Footer/Footer';

export const NFT = () => {
    return (
        <RecoilRoot>
            <div className={ "NFT-" + global.app_config.CSS_ID + " p-6" }>
                <div className="main-container w-full h-full rounded-3xl pt-8 max-w-7xl m-auto">
                    <div className="px-14">
                        <Top/>
                        <Center/>
                        <Trending/>
                        <TopArtistes/>
                        <Bottom/>
                        <Categories/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </RecoilRoot>
    );
}