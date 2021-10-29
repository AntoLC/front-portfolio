import { Capsule } from "./components/Capsule/Capsule";
import { FullCapsule } from "./components/FullCapsule/FullCapsule";
import { Ingredients } from "./components/Ingredients/Ingredients";
import { LetterC } from "./components/LetterC/LetterC";
import './Frontpage.scss';

export const Frontpage = () => {
    return (
    <div className={ "Frontpage-" + global.app_config.CSS_ID + " h-screen"}>
        <div className="h-10">
            <div className="font-sans text-2xl text-gray-800 font-black mx-5">Capsule</div>
        </div>
        <div className="form-top-right w-4/12"/>
        <div className="absolute right-6 w-36 h-32 top-6">
            <FullCapsule isLogo={true} />
            <div className="font-sans text-3xl text-white font-black text-center">Capsule</div>
        </div>
        <div className="h-screen flex flex-wrap content-center justify-center -m-10">
            <FullCapsule isLogo={false} />
            <div className="font-sans text-8xl text-gray-800 font-black">Capsule</div>
        </div>
        <div className="form-bottom-left"/>
        <div className="container-capsule flex h-40 ml-5">
            <div className="relative -top-6">
                <FullCapsule isLogo={true} withIngredients={false}/>
                <div className="font-sans text-white text-center p-2">Letter C</div>
            </div>
            <div className="relative font-sans text-white text-center text-3xl -top-8">+</div>
            <div className="relative -top-6">
                <Ingredients css=" relative left-12 -top-4 w-32 h-8 m-auto "/>
                <div className="font-sans text-white text-center p-2">Ingredients</div>
            </div>
            <div className="relative font-sans text-white text-center text-3xl -top-8">+</div>
            <div className="capsule-small relative -top-6">
                <Capsule css=" relative left-12 -top-4 w-32 h-32 m-auto "/>
                <div className="font-sans text-white text-center p-2">Capsule</div>
            </div>
        </div>
    </div>
    );
}