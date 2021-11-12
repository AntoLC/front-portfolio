import "./NFT.scss";
import { RecoilRoot } from "recoil";
import { Top } from "./components/Top/Top";
import { Center } from "./components/Center/Center";
import { Trending } from "./components/Trending/Trending";
import { TopArtistes } from "./components/TopArtistes/TopArtistes";
import { Bottom } from "./components/Bottom/Bottom";
import { Categories } from "./components/Categories/Categories";
import { Footer } from "./components/Footer/Footer";
import { useEffect } from "react";

export const NFT = () => {
  useEffect(() => {
    document.title = "Landing Page NFT";
  }, []);

  return (
    <RecoilRoot>
      <div className={"NFT-" + global.app_config.CSS_ID + " sm:p-6"}>
        <div className="main-container w-full h-full sm:rounded-3xl pt-8 sm:max-w-7xl m-auto">
          <div className="px-2 sm:px-14">
            <Top />
            <Center />
            <Trending />
            <TopArtistes />
            <Bottom />
            <Categories />
          </div>
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  );
};
